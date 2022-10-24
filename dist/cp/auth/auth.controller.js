"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../user/user.dto");
const user_service_1 = require("../user/user.service");
const user_decorator_1 = require("../user/user.decorator");
const user_entity_1 = require("../enity/user.entity");
const auth_decorator_1 = require("../../guards/auth.decorator");
let AuthController = class AuthController {
    constructor(userService) {
        this.userService = userService;
    }
    user(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            return this.userService.getUser(user.UserID);
        });
    }
    login(req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.login(payload);
        });
    }
    validateUser(req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const ip = payload.ip ? payload.ip : req.headers['x-forwarded-for'];
            common_1.Logger.log('IP_Address', payload.ip);
            return this.userService.validateUser(payload, ip);
        });
    }
    SetPassword(req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.setPassword(payload);
        });
    }
    SendOtp(req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.sendOtp(payload);
        });
    }
    SendOtpByPhone(req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.sendOtpByPhoneNumber(payload);
        });
    }
    ValidateOtp(req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.validateOtp(payload);
        });
    }
    getUser(res, user) {
        return __awaiter(this, void 0, void 0, function* () {
            res.setHeader('X-Auth-User', JSON.stringify(user));
            return res.status(common_1.HttpStatus.OK).json(user);
        });
    }
};
__decorate([
    common_1.Get('user'),
    auth_decorator_1.Auth(),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, user_decorator_1.UserAuth()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "user", null);
__decorate([
    common_1.Post('login'),
    common_1.HttpCode(200),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.LoginUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('validate_agrodealer'),
    common_1.HttpCode(200),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.validateUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateUser", null);
__decorate([
    common_1.Post('new_password'),
    common_1.HttpCode(200),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.passwordDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SetPassword", null);
__decorate([
    common_1.Post('send_otp'),
    common_1.HttpCode(200),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.otpDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SendOtp", null);
__decorate([
    common_1.Post('recover_account'),
    common_1.HttpCode(200),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.phoneOtpDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SendOtpByPhone", null);
__decorate([
    common_1.Post('validate_otp'),
    common_1.HttpCode(200),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.validateotpDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "ValidateOtp", null);
__decorate([
    common_1.Get('check'),
    __param(0, common_1.Res()), __param(1, user_decorator_1.UserAuth()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUser", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map