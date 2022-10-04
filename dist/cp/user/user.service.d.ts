import { Repository } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from '../enity/user.entity';
import { UserDTO, LoginUserDTO, validateUserDTO, otpDTO, passwordDTO, validateotpDTO } from './user.dto';
import { Otp } from "../enity/otp.entity";
export declare class UserService {
    private readonly userRepository;
    private readonly otpRepository;
    constructor(userRepository: Repository<User>, otpRepository: Repository<Otp>);
    login({ username, password }: LoginUserDTO, ip: any): Promise<User>;
    validateUser({ username }: validateUserDTO, ip: any): Promise<any>;
    sendOtp({ username }: otpDTO): Promise<any>;
    validateOtp({ username, otp }: validateotpDTO): Promise<any>;
    setPassword({ username, password, confirmPassword }: passwordDTO): Promise<any>;
    findByUsername(username: string): Promise<User>;
    getByID(UserID: string): Promise<User>;
    getUser(UserID: string): Promise<User>;
    update(UserID: string, data: Partial<UserDTO>, approvingUser: User): Promise<User>;
    destroy(UserID: string): Promise<void>;
    index(options?: any): Promise<Pagination<User>>;
    generateOtp(n: any): Promise<number>;
    sendSMSSoap(data: any): Promise<void>;
    uuid(): string;
}
