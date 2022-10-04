import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UserService } from './user.service';
export declare class IsUserUnique implements ValidatorConstraintInterface {
    private readonly userService;
    constructor(userService: UserService);
    validate(text: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
