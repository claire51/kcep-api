"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const user_entity_1 = require("../enity/user.entity");
const case_1 = require("../../shared/case");
const otp_entity_1 = require("../enity/otp.entity");
const services_constants_1 = require("../../config/services_constants");
const date_fns_1 = require("date-fns");
const XLSX = require('xlsx');
const Request = require('request');
const bcrypt = require('bcryptjs');
let UserService = class UserService {
    constructor(userRepository, otpRepository) {
        this.userRepository = userRepository;
        this.otpRepository = otpRepository;
    }
    login({ username, password }, ip) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.findOne({
                    where: { username },
                });
                if (!user) {
                    throw new common_1.BadRequestException('Agrodealer does not exist');
                }
                if (bcrypt.compareSync(password, user.Password)) {
                    yield this.userRepository.update({ UserID: user.UserID }, {
                        UpdatedAt: new Date(), FirstPassword: 1,
                    });
                    const wt = user.sign;
                    delete wt.Password;
                    return wt;
                }
                else {
                    throw new common_1.BadRequestException(`${username} Invalid Password`);
                }
            }
            catch (e) {
                common_1.Logger.log('Login_Error', e);
                throw new common_1.BadRequestException(`Exception :${e}`);
            }
        });
    }
    validateUser({ username }, ip) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.findOne({
                    where: { username },
                });
                if (!user) {
                    throw new common_1.BadRequestException('Agrodealer does not exist');
                }
                if (!user.FirstPassword && user.FirstPassword !== 1) {
                    yield this.userRepository.update({ UserID: user.UserID }, {
                        FirstPassword: 0,
                    });
                    user.FirstPassword = 0;
                    return { firstLogin: true };
                }
                else {
                    return { firstLogin: false };
                }
            }
            catch (e) {
                common_1.Logger.log('Agrodealer Validation Error' + e.getMessage, 'USER');
                throw new common_1.BadRequestException('Exception ' + e.getMessage());
            }
        });
    }
    sendOtp({ username }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.findOne({
                    where: { username },
                });
                if (!user) {
                    throw new common_1.BadRequestException('Agrodealer does not exist');
                }
                const otp = yield this.generateOtp(4);
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
                yield this.sendSMSSoap({
                    message: `Your OTP verification code is ${otp}, the code expires in 5 minutes`,
                    phone: user.PhoneNumber,
                });
                yield this.otpRepository.save(u);
            }
            catch (e) {
                common_1.Logger.log('Agrodealer OTP Generation Error' + e.getMessage, 'OTP');
                throw new common_1.BadRequestException('Exception ' + e);
            }
        });
    }
    validateOtp({ username, otp }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const otpData = yield this.otpRepository.findOne({
                    where: { TerminalID: username, Otp: otp },
                });
                if (!otpData) {
                    return { valid: false, message: 'OTP code does not exist' };
                }
                if (otpData.OtpUtilized === 1) {
                    return { valid: false, message: 'OTP code has already been utilized' };
                }
                const currentTime = new Date();
                currentTime.setHours(currentTime.getHours() + 3);
                if (otpData.OtpExpiredTime > currentTime) {
                    yield this.otpRepository.update({ ID: otpData.ID }, {
                        OtpExpired: 0, OtpUtilized: 1, OtpUtilizedTime: currentTime,
                    });
                    return { valid: true, message: 'success' };
                }
                else {
                    yield this.otpRepository.update({ ID: otpData.ID }, {
                        OtpExpired: 1, OtpUtilized: 0,
                    });
                    return { valid: false, message: 'OTP code has expired' };
                }
            }
            catch (e) {
                common_1.Logger.log('Agrodealer OTP Validation Error' + e, 'OTP');
                throw new common_1.BadRequestException('Exception ' + e);
            }
        });
    }
    setPassword({ username, password, confirmPassword }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (confirmPassword !== password) {
                    throw new common_1.BadRequestException('Comfirm password  does not match provided password');
                }
                const user = yield this.userRepository.findOne({
                    where: { username },
                });
                if (!user) {
                    throw new common_1.BadRequestException('Agrodealer does not exist');
                }
                const otpData = yield this.otpRepository.findOne({
                    where: { TerminalID: username, OtpUtilized: 1 },
                });
                if (!otpData) {
                    throw new common_1.BadRequestException('Kindly validate OTP code to change password');
                }
                const hash = yield bcrypt.hashSync(password, 10);
                yield this.userRepository.update({ username }, {
                    Password: hash, FirstPassword: 1,
                });
                const wt = user.sign;
                delete wt.Password;
                return wt;
            }
            catch (e) {
                common_1.Logger.log('Agrodealer NEWPASSWORD SET Error' + e, 'NEWPASSWORD');
                throw new common_1.BadRequestException('Exception ' + e);
            }
        });
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOne({
                where: { username },
            });
        });
    }
    getByID(UserID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOne({
                where: { UserID },
            });
        });
    }
    getUser(UserID) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: { UserID },
            });
            return user;
        });
    }
    update(UserID, data, approvingUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOneOrFail({ UserID });
            const u = Object.assign(Object.assign({}, user), data);
            yield this.userRepository.save(u);
            return yield this.userRepository.findOne({ UserID });
        });
    }
    destroy(UserID) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    index(options = { limit: 10, page: 1 }) {
        return __awaiter(this, void 0, void 0, function* () {
            const conditions = {
                where: [
                    {
                        username: case_1.ILike(`%${options.search}%`),
                    },
                    {
                        FirstName: case_1.ILike(`%${options.search}%`),
                    },
                    {
                        Mobile: case_1.ILike(`%${options.search}%`),
                    },
                ],
            };
            if (options.status) {
                conditions.where.map((o) => {
                    o.Status = options.status;
                });
            }
            return yield nestjs_typeorm_paginate_1.paginate(this.userRepository, options, Object.assign({}, conditions));
        });
    }
    generateOtp(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) + Math.pow(10, n - 1);
        });
    }
    sendSMSSoap(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const auth = 'Basic ' + new Buffer(services_constants_1.configCredentials.username + ":" + services_constants_1.configCredentials.password).toString("base64");
            const currenttime = date_fns_1.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
            const uuid = this.uuid();
            const smsurl = services_constants_1.configCredentials.sms_url;
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
                    common_1.Logger.log('Error Sending SMS', ' ' + JSON.stringify(error));
                }
                else {
                    common_1.Logger.log(`SMS  Sent to ${data.phone} `, '>>>>>>>>');
                }
            });
        });
    }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(1, typeorm_1.InjectRepository(otp_entity_1.Otp)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map