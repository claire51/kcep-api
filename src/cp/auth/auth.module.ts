import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { User } from '../enity/user.entity';
import { AuthService } from './auth.service';
import {Otp} from "../enity/otp.entity";
@Module({
  imports: [TypeOrmModule.forFeature([User, Otp])],
  providers: [UserService, AuthService],
  controllers: [AuthController],
  exports: [ AuthService],
})
export class AuthModule {}
