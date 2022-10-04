import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger, ValidationPipe} from '@nestjs/common';
import {ValidationException} from './filters/validation.exception';
import {ValidationError} from 'class-validator';
import {LoggingInterceptor} from './shared/logging.interceptor';
import {FiltersPipe} from './shared/filters.pipe';
import {json, urlencoded} from "express";

const Port = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            exceptionFactory: (errors: ValidationError[]) => {
                const err: any = {};
                // Logger.log(errors);
                errors.map(error => {
                    err[`${error.property}`] = Object.values(error.constraints)[0];
                    return error;
                });
                return new ValidationException(err);
            },
        }),
        new FiltersPipe(),
    );

    app.use(json({limit: '50mb'}));
    app.use(urlencoded({limit: '50mb'}));
    app.useGlobalInterceptors(new LoggingInterceptor());
    // app.use(AuthMiddleware);
    // app.setGlobalPrefix('api');
    await app.startAllMicroservices();
    await app.listen(Port);

    Logger.log(`API Service running at port ${Port}`, 'Bootstrap');
}

bootstrap();
