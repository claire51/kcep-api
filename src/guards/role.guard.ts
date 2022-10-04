import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Scope,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (request.user) {
      return false;
    }
  }
}
