import { Request } from 'express';
import { LoginUserDTO, otpDTO, passwordDTO, validateotpDTO, validateUserDTO } from '../user/user.dto';
import { UserService } from '../user/user.service';
import { User } from '../enity/user.entity';
import { Response } from 'express';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    user(user: User): Promise<User>;
    login(req: Request, payload: LoginUserDTO): Promise<User>;
    validateUser(req: Request, payload: validateUserDTO): Promise<any>;
    SetPassword(req: Request, payload: passwordDTO): Promise<any>;
    SendOtp(req: Request, payload: otpDTO): Promise<any>;
    ValidateOtp(req: Request, payload: validateotpDTO): Promise<any>;
    getUser(res: Response, user: User): Promise<Response<any>>;
}
