"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const http_filter_1 = require("./filters/http.filter");
const validation_filter_1 = require("./filters/validation.filter");
const app_controller_1 = require("./app.controller");
const user_module_1 = require("./cp/user/user.module");
const database_module_1 = require("./config/database.module");
const common_portal_module_1 = require("./cp/common-portal.module");
const app_service_1 = require("./app.service");
const pubsub_module_1 = require("./shared/pubsub/pubsub.module");
const amqp_module_1 = require("./shared/amqp/amqp.module");
const platform_express_1 = require("@nestjs/platform-express");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseConfigModule.register(),
            amqp_module_1.CoopAMQPModule,
            pubsub_module_1.PubsubModule,
            user_module_1.UserModule,
            common_portal_module_1.CommonPortalModule,
            platform_express_1.MulterModule.register({
                dest: '/uploads',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: http_filter_1.HttpExceptionFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: validation_filter_1.ValidationFilter,
            },
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map