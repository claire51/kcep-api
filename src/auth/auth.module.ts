import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/cp/enity/user.entity';
import { UserService } from 'src/cp/user/user.service';
import { AuthService } from 'src/cp/auth/auth.service';
import { AuthController } from 'src/cp/auth/auth.controller';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})

export class AuthModule implements NestModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({
        path: 'auth/login',
        method: RequestMethod.ALL,
      })
      .forRoutes(AuthController);
  }
}
