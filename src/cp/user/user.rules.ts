import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

import { UserService } from './user.service';

@Injectable()
@ValidatorConstraint({ name: 'IsUnique', async: true })
export class IsUserUnique implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}
  async validate(text: string, args: ValidationArguments) {
    const user = await this.userService.findByUsername(text);

    if (user) {
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} is already taken`;
  }
}
