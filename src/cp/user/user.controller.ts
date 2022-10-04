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

@Controller('users')
@Auth()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    async getAllUsers(@Query() filters) {
        return await this.userService.index(filters);
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // async createUser(@UserAuth() User: User, @Body() userdto: UserDTO) {
    //     const user: User = await this.userService.findByUsername(userdto.Username.toLowerCase());
    //     if (user && user.UserID) {
    //         throw new BadRequestException(
    //             'User with that username already exist ,try another username.',
    //         );
    //     } else {
    //         return await this.mckService.make(
    //             userdto,
    //             User,
    //             `OMNI_USER_CREATE`,
    //             `Create omni portal user: First Name ${userdto.FirstName} ,  Last Name: ${userdto.LastName} , Email: ${userdto.Email}, Department: ${userdto.deptName}, User Role: ${userdto.roleName}`,
    //             `all_users`,
    //         );
    //     }
    // }

    @Get(':username')
    async findUserByUsername(@Param('username') username: string): Promise<User> {
        return this.userService.findByUsername(username);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.destroy(id);
    }
}
