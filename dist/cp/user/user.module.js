"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../enity/user.entity");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const user_rules_1 = require("./user.rules");
const auth_module_1 = require("../auth/auth.module");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const otp_entity_1 = require("../enity/otp.entity");
let UserModule = class UserModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes(user_controller_1.UserController);
    }
};
UserModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, otp_entity_1.Otp]), auth_module_1.AuthModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, user_rules_1.IsUserUnique],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map