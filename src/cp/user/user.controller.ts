import {
    Controller,
    Get,
    Param,
    Delete,
    UseInterceptors,
    ClassSerializerInterceptor,
    Query,
} from '@nestjs/common';

import {UserService} from './user.service';
import {User} from '../enity/user.entity';
import {Auth} from '../../guards/auth.decorator';
import {AgrodealerAccountsEntity} from "../enity/agrodealer-accounts.entity";

@Controller('agrodealer')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    async getAllUsers(@Query() filters) {
        return await this.userService.index(filters);
    }

    @Get('byUsername/:username')
    async findUserByUsername(@Param('username') username: string): Promise<User> {
        return this.userService.findByUsername(username);
    }

    @Get('account')
    async findAgrodealerAccount(@Query() filters: any): Promise<AgrodealerAccountsEntity> {
        return this.userService.findByMerchantCode(filters.merchantCode);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.destroy(id);
    }
}
