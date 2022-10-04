import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { HttpExceptionFilter } from './filters/http.filter';
import { ValidationFilter } from './filters/validation.filter';
import { AppController } from './app.controller';

import { UserModule } from './cp/user/user.module';
import { DatabaseConfigModule } from './config/database.module';
import { CommonPortalModule } from './cp/common-portal.module';
import { AppService } from './app.service';
import { PubsubModule } from './shared/pubsub/pubsub.module';
import { CoopAMQPModule } from './shared/amqp/amqp.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    DatabaseConfigModule.register(),
    CoopAMQPModule,
    PubsubModule,
    UserModule,
    CommonPortalModule,
    MulterModule.register({
      dest: '/uploads',
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ValidationFilter,
    },
    AppService,
  ],
})
export class AppModule {}
