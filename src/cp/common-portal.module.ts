import { Module, NestModule} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {AuthMiddleware} from 'src/middleware/auth.middleware';
import {AuthController} from './auth/auth.controller';
@Module({
    imports: [
        AuthModule,
    ],
})
export class CommonPortalModule implements NestModule {
    configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(
                AuthController,
            );
    }
}
