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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_entity_1 = require("../enity/user.entity");
const auth_decorator_1 = require("../../guards/auth.decorator");
const user_decorator_1 = require("./user.decorator");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers(user, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.index(filters);
        });
    }
    findUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.findByUsername(username);
        });
    }
    findAgrodealerAccount(user, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.findByMerchantCode(filters.merchantCode);
        });
    }
    deleteUser(user, id) {
        return this.userService.destroy(id);
    }
};
__decorate([
    common_1.Get(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    common_1.Get('byUsername/:username'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserByUsername", null);
__decorate([
    common_1.Get('account'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAgrodealerAccount", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    common_1.Controller('agrodealer'),
    auth_decorator_1.Auth(),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map