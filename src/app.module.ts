import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { HttpExceptionFilter } from './filters/http.filter';
import { ValidationFilter } from './filters/validation.filter';
import { AppController } from './app.controller';

import { UserModule } from './cp/user/user.module';
import { DatabaseConfigModule } from './config/database.module';
import { CommonPortalModule } from './cp/common-portal.module';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { FarmersModule } from './farmers/farmers.module';
@Module({
  imports: [
    DatabaseConfigModule.register(),
    DatabaseConfigModule.register({ name: 'KCEPPORTAL' }),
    UserModule,
    CommonPortalModule,
    MulterModule.register({
      dest: '/uploads',
    }),
    FarmersModule,
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
