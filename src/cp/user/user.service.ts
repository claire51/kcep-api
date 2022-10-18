import {
    Injectable,
    BadRequestException,
    Logger,
} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import {
    Pagination,
    IPaginationOptions,
    paginate,
} from 'nestjs-typeorm-paginate';

import {User} from '../enity/user.entity';
import {UserDTO, LoginUserDTO, validateUserDTO, otpDTO, passwordDTO, validateotpDTO} from './user.dto';
import {ILike} from 'src/shared/case';
import {Otp} from "../enity/otp.entity";
import {configCredentials} from "../../config/services_constants";
import {format} from 'date-fns';
import {AgrodealerAccountsEntity} from "../enity/agrodealer-accounts.entity";

const Request = require('request');
const bcrypt = require('bcryptjs');

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Otp)
        private readonly otpRepository: Repository<Otp>,
        @InjectRepository(AgrodealerAccountsEntity)
        private readonly agrodealerAccountsRepository: Repository<AgrodealerAccountsEntity>,
    ) {
    }

    async login({username, password}: LoginUserDTO): Promise<User> {

        const user = await this.userRepository.findOne({
            where: {username},
        });
        try {
            if (!user) {
                throw new BadRequestException('Agrodealer does not exist');
            }

            if (bcrypt.compareSync(password, user.Password)) {
                await this.userRepository.update({UserID: user.UserID}, {
                    UpdatedAt: new Date(), FirstPassword: 1,
                });
                const wt = user.sign;
                delete wt.Password;
                return wt;
            } else {
                throw new BadRequestException(`${username} Invalid Password`);
            }
        } catch (e) {
            Logger.log('Login_Error', e);
            throw new BadRequestException(`Exception :${e}`);

        }
    }

    async validateUser({username}: validateUserDTO, ip): Promise<any> {

        const user: User = await this.userRepository.findOne({
            where: {username},
        });
        if (!user) {
            throw new BadRequestException('Agrodealer does not exist');
        }
        try {
            if (!user.FirstPassword && user.FirstPassword !== 1) {
                await this.userRepository.update({UserID: user.UserID}, {
                    FirstPassword: 0,
                });
                user.FirstPassword = 0;
                return {firstLogin: true};
            } else {
                return {firstLogin: false};
            }
        } catch (e) {
            Logger.log('Agrodealer Validation Error' + e.getMessage, 'USER');
            throw new BadRequestException('Exception ' + e.getMessage());
        }
    }

    async sendOtp({username}: otpDTO): Promise<any> {
        const user: User = await this.userRepository.findOne({
            where: {username},
        });
        if (!user) {
            throw new BadRequestException('Agrodealer does not exist');
        }
        try {
            const otp = await this.generateOtp(4);
            const otpExpirydate = new Date();
            const currentTime = new Date();
            currentTime.setHours(currentTime.getHours() + 3);
            otpExpirydate.setHours(otpExpirydate.getHours() + 3);
            otpExpirydate.setMinutes(otpExpirydate.getMinutes() + 5);

            const u = {
                Otp: otp,
                OtpExpired: 0,
                OtpExpiredTime: otpExpirydate,
                OtpUtilized: 0,
                AutoGenerationTime: currentTime,
                TerminalID: username,
            };
            await this.sendSMSSoap({
                message: `Your OTP verification code is ${otp}, the code expires in 5 minutes`,
                phone: user.PhoneNumber,
            });
            await this.otpRepository.save(u);
        } catch (e) {
            Logger.log('Agrodealer OTP Generation Error' + e.getMessage, 'OTP');
            throw new BadRequestException('Exception ' + e);
        }
    }

    async validateOtp({username, otp}: validateotpDTO): Promise<any> {
        try {
            const otpData: Otp = await this.otpRepository.findOne({
                where: {TerminalID: username, Otp: otp},
            });
            if (!otpData) {
                return {valid: false, message: 'OTP code does not exist'};
            }
            if (otpData.OtpUtilized === 1) {
                return {valid: false, message: 'OTP code has already been utilized'};
            }
            const currentTime = new Date();
            currentTime.setHours(currentTime.getHours() + 3);
            if (otpData.OtpExpiredTime > currentTime) {
                await this.otpRepository.update({ID: otpData.ID}, {
                    OtpExpired: 0, OtpUtilized: 1, OtpUtilizedTime: currentTime,
                });
                return {valid: true, message: 'success'};
            } else {
                await this.otpRepository.update({ID: otpData.ID}, {
                    OtpExpired: 1, OtpUtilized: 0,
                });
                return {valid: false, message: 'OTP code has expired'};
            }
        } catch (e) {
            Logger.log('Agrodealer OTP Validation Error' + e, 'OTP');
            throw new BadRequestException('Exception ' + e);
        }
    }

    async setPassword({username, password, confirmPassword}: passwordDTO): Promise<any> {

        if (confirmPassword !== password) {
            throw new BadRequestException('Comfirm password  does not match provided password');
        }

        const user = await this.userRepository.findOne({
            where: {username},
        });

        if (!user) {
            throw new BadRequestException('Agrodealer does not exist');
        }
        try {
            const otpData: Otp = await this.otpRepository.findOne({
                where: {TerminalID: username, OtpUtilized: 1},
            });
            if (!otpData) {
                throw new BadRequestException('Kindly validate OTP code to change password');
            }

            const hash = await bcrypt.hashSync(password, 10);
            await this.userRepository.update({username}, {
                Password: hash, FirstPassword: 1,
            });
            const wt = user.sign;
            delete wt.Password;
            return wt;
        } catch (e) {
            Logger.log('Agrodealer NEWPASSWORD SET Error' + e, 'NEWPASSWORD');
            throw new BadRequestException('Exception ' + e);
        }
    }

    async findByUsername(username: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {username},
        });
    }

    async findByMerchantCode(merchantCode: string): Promise<AgrodealerAccountsEntity> {
        try {
            const agrodealer = await this.agrodealerAccountsRepository.findOne({
                where: {merchantCode},
            });

            if (!agrodealer) {
                throw new BadRequestException('Agrodealer with provided merchant code does not exist');
            }

            return agrodealer;
        } catch (e) {
            throw new BadRequestException(e);

        }
    }

    async getByID(UserID: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {UserID},
        });
    }

    async getUser(UserID: string) {
        const user = await this.userRepository.findOne({
            where: {UserID},
        });
        return user;
    }

    async update(UserID: string, data: Partial<UserDTO>, approvingUser: User): Promise<User> {
        const user = await this.userRepository.findOneOrFail({UserID});
        const u = {...user, ...data};
        await this.userRepository.save(u);
        return await this.userRepository.findOne({UserID});
    }

    async destroy(UserID: string) {
    }

    async index(options: any = {limit: 10, page: 1}): Promise<Pagination<User>> {
        const conditions = {
            where: [
                {
                    username: ILike(`%${options.search}%`),
                },
                {
                    FirstName: ILike(`%${options.search}%`),
                },
                {
                    Mobile: ILike(`%${options.search}%`),
                },
            ],
        };

        if (options.status) {
            conditions.where.map((o: any) => {
                o.Status = options.status;
            });
        }
        return await paginate(this.userRepository, options as IPaginationOptions, {
            ...conditions,
        });
    }

    async generateOtp(n) {
        return Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) + Math.pow(10, n - 1);
    }

    async sendSMSSoap(data: any) {
        const auth = 'Basic ' + new Buffer(configCredentials.username + ":" + configCredentials.password).toString("base64");

        const currenttime = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
        const uuid = this.uuid();
        const smsurl = configCredentials.sms_url;
        const xml = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:mes=\"urn://co-opbank.co.ke/CommonServices/Data/Message/MessageHeader\" xmlns:com=\"urn://co-opbank.co.ke/CommonServices/Data/Common\" xmlns:ns=\"urn://co-opbank.co.ke/Banking/Common/SMS/1.0\">\n" +
            "   <soapenv:Header>\n" +
            "      <mes:RequestHeader>\n" +
            `         <com:CreationTimestamp>${currenttime}</com:CreationTimestamp>\n` +
            `         <com:CorrelationID>${uuid}</com:CorrelationID>\n` +
            "         <mes:FaultTO>?</mes:FaultTO>\n" +
            `          <mes:MessageID>${uuid}</mes:MessageID>\n` +
            "         <mes:ReplyTO>?</mes:ReplyTO>\n" +
            "         <mes:Credentials>\n" +
            "            <mes:SystemCode>?</mes:SystemCode>\n" +
            "            <mes:Username>?</mes:Username>\n" +
            "            <mes:Password>?</mes:Password>\n" +
            "            <mes:Realm>?</mes:Realm>\n" +
            "         </mes:Credentials>\n" +
            "      </mes:RequestHeader>\n" +
            "   </soapenv:Header>\n" +
            "   <soapenv:Body>\n" +
            "      <ns:SMSRequest>\n" +
            "         <ns:SMSBody>\n" +
            `            <messageID>${uuid}</messageID>\n` +
            `           <message>${data.message}</message>\n` +
            `          <MSISDN>${data.phone}</MSISDN>\n` +
            "            <Credentials>\n" +
            "               <username>digitalbankingapiuser</username>\n" +
            "               <password>Digit@L2018</password>\n" +
            "               <encryped>1</encryped>\n" +
            "               <clientID>267</clientID>\n" +
            "            </Credentials>\n" +
            "         </ns:SMSBody>\n" +
            "      </ns:SMSRequest>\n" +
            "   </soapenv:Body>\n" +
            "</soapenv:Envelope>";
        Request.post({
            headers: {
                'Content-Type': 'text/xml',
                'Authorization': auth,
                'SOAPAction': '"SendSMS"',
            },
            url: smsurl,
            body: xml,
        }, (error, response, body) => {
            if (error) {
                Logger.log('Error Sending SMS', ' ' + JSON.stringify(error));
            } else {
                Logger.log(`SMS  Sent to ${data.phone} `, '>>>>>>>>');
            }
        });
    }

    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
