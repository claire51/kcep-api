import { SetMetadata, UseGuards } from '@nestjs/common';
import { RolesGuard } from './role.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { applyDecorators } from '../shared/apply.decorators';

export function Auth(...roles: string[]) {
  if (!roles) {
    return UseGuards(AuthGuard);
  }
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
  );
}
