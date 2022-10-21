"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const validation_exception_1 = require("./filters/validation.exception");
const logging_interceptor_1 = require("./shared/logging.interceptor");
const filters_pipe_1 = require("./shared/filters.pipe");
const express_1 = require("express");
const Port = process.env.PORT || 3000;
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            transform: true,
            exceptionFactory: (errors) => {
                const err = {};
                errors.map(error => {
                    err[`${error.property}`] = Object.values(error.constraints)[0];
                    return error;
                });
                return new validation_exception_1.ValidationException(err);
            },
        }), new filters_pipe_1.FiltersPipe());
        app.enableCors();
        app.use(express_1.json({ limit: '50mb' }));
        app.use(express_1.urlencoded({ limit: '50mb' }));
        app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
        yield app.startAllMicroservices();
        yield app.listen(Port);
        common_1.Logger.log(`API Service running at port ${Port}`, 'Bootstrap');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map