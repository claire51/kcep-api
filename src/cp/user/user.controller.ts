import {
    Controller,
    Get,
    Param,
    Delete,
    UseInterceptors,
    ClassSerializerInterceptor,
    Query, UsePipes, ValidationPipe,
} from '@nestjs/common';

import {UserService} from './user.service';
import {User} from '../enity/user.entity';
import {Auth} from '../../guards/auth.decorator';
import {AgrodealerAccountsEntity} from "../enity/agrodealer-accounts.entity";
import {UserAuth} from "./user.decorator";

@Controller('agrodealer')
@Auth()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    @UsePipes(ValidationPipe)
    async getAllUsers(@UserAuth() user: User, @Query() filters) {
        return await this.userService.index(filters);
    }

    @Get('byUsername/:username')
    async findUserByUsername( @Param('username') username: string): Promise<User> {
        return this.userService.findByUsername(username);
    }

    @Get('account')
    @UsePipes(ValidationPipe)
    async findAgrodealerAccount(@UserAuth() user: User, @Query() filters: any): Promise<AgrodealerAccountsEntity> {
        return this.userService.findByMerchantCode(filters.merchantCode);
    }

    @Delete(':id')
    @UsePipes(ValidationPipe)
    deleteUser(@UserAuth() user: User, @Param('id') id: string) {
        return this.userService.destroy(id);
    }
}
