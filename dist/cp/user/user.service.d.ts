import { Repository } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from '../enity/user.entity';
import { UserDTO, LoginUserDTO, validateUserDTO, otpDTO, passwordDTO, validateotpDTO, phoneOtpDTO } from './user.dto';
import { Otp } from "../enity/otp.entity";
import { AgrodealerAccountsEntity } from "../enity/agrodealer-accounts.entity";
export declare class UserService {
    private readonly userRepository;
    private readonly otpRepository;
    private readonly agrodealerAccountsRepository;
    constructor(userRepository: Repository<User>, otpRepository: Repository<Otp>, agrodealerAccountsRepository: Repository<AgrodealerAccountsEntity>);
    login({ username, password }: LoginUserDTO): Promise<User>;
    validateUser({ username }: validateUserDTO, ip: any): Promise<any>;
    sendOtp({ username }: otpDTO): Promise<any>;
    sendOtpByPhoneNumber({ mobileNumber, type }: phoneOtpDTO): Promise<any>;
    validateOtp({ username, otp }: validateotpDTO): Promise<any>;
    setPassword({ username, password, confirmPassword }: passwordDTO): Promise<any>;
    findByUsername(username: string): Promise<User>;
    findByMerchantCode(merchantCode: string): Promise<AgrodealerAccountsEntity>;
    getUser(UserID: string): Promise<User>;
    update(UserID: string, data: Partial<UserDTO>, approvingUser: User): Promise<User>;
    destroy(UserID: string): Promise<void>;
    index(options?: any): Promise<Pagination<User>>;
    generateOtp(n: any): Promise<number>;
    sendSMSSoap(data: any): Promise<void>;
    uuid(): string;
}
