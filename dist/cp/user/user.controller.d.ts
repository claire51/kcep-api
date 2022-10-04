import { UserService } from './user.service';
import { User } from '../enity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(filters: any): Promise<import("nestjs-typeorm-paginate").Pagination<User>>;
    findUserByUsername(username: string): Promise<User>;
    deleteUser(id: string): Promise<void>;
}
