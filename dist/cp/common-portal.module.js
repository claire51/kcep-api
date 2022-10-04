"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonPortalModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const auth_middleware_1 = require("../middleware/auth.middleware");
const auth_controller_1 = require("./auth/auth.controller");
let CommonPortalModule = class CommonPortalModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes(auth_controller_1.AuthController);
    }
};
CommonPortalModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
        ],
    })
], CommonPortalModule);
exports.CommonPortalModule = CommonPortalModule;
//# sourceMappingURL=common-portal.module.js.map