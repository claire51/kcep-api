import {
    Controller,
    Get,
    Post,
    Body,
    UseInterceptors,
    ClassSerializerInterceptor,
    Res,
    HttpStatus,
    UnauthorizedException,
    HttpCode, Logger, Req,
} from '@nestjs/common';
import {Request} from 'express';
import {LoginUserDTO, otpDTO, passwordDTO, validateotpDTO, validateUserDTO} from '../user/user.dto';
import {UserService} from '../user/user.service';
import {UserAuth} from '../user/user.decorator';
import {User} from '../enity/user.entity';
import {Response} from 'express';
import {Auth} from 'src/guards/auth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UserService) {
    }

    @Get('user')
    @Auth()
    @UseInterceptors(ClassSerializerInterceptor)
    async user(@UserAuth() user: User) {
        if (!user) {
            throw new UnauthorizedException();
        }
        return this.userService.getUser(user.UserID);
    }

    @Post('login')
    @HttpCode(200)
    async login(@Req() req: Request, @Body() payload: LoginUserDTO) {
        return this.userService.login(payload);
    }

    @Post('validate_agrodealer')
    @HttpCode(200)
    async validateUser(@Req() req: Request, @Body() payload: validateUserDTO) {
        const ip = payload.ip ? payload.ip : req.headers['x-forwarded-for'];
        Logger.log('IP_Address', payload.ip);
        return this.userService.validateUser(payload, ip);
    }

    @Post('new_password')
    @HttpCode(200)
    async SetPassword(@Req() req: Request, @Body() payload: passwordDTO) {
        return this.userService.setPassword(payload);
    }

    @Post('send_otp')
    @HttpCode(200)
    async SendOtp(@Req() req: Request, @Body() payload: otpDTO) {
        return this.userService.sendOtp(payload);
    }

    @Post('validate_otp')
    @HttpCode(200)
    async ValidateOtp(@Req() req: Request, @Body() payload: validateotpDTO) {
        return this.userService.validateOtp(payload);
    }

    @Get('check')
    async getUser(@Res() res: Response, @UserAuth() user: User) {
        res.setHeader('X-Auth-User', JSON.stringify(user));
        return res.status(HttpStatus.OK).json(user);
    }
}
