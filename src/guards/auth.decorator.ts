import {  UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { applyDecorators } from '../shared/apply.decorators';

export function Auth() {
  return applyDecorators(
    UseGuards(AuthGuard),
  );
}
