import { UserService } from './user.service';
import { User } from '../enity/user.entity';
import { AgrodealerAccountsEntity } from "../enity/agrodealer-accounts.entity";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(user: User, filters: any): Promise<import("nestjs-typeorm-paginate").Pagination<User>>;
    findUserByUsername(username: string): Promise<User>;
    findAgrodealerAccount(user: User, filters: any): Promise<AgrodealerAccountsEntity>;
    deleteUser(user: User, id: string): Promise<void>;
}
