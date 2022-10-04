import { Module, Global, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../enity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IsUserUnique } from './user.rules';
import { AuthModule } from 'src/cp/auth/auth.module';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import {Otp} from "../enity/otp.entity";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([ User, Otp]), AuthModule],
  controllers: [UserController],
  providers: [UserService, IsUserUnique],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(UserController);
  }
}
