import { NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/cp/user/user.service';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly userService;
    constructor(userService: UserService);
    use(req: any, res: Response, next: Function): Promise<void>;
    validateToken(auth: string): Promise<import("../cp/enity/user.entity").User>;
}
