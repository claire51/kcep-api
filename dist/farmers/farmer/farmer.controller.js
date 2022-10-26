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
exports.FarmerController = void 0;
const common_1 = require("@nestjs/common");
const farmer_service_1 = require("./farmer.service");
const user_decorator_1 = require("../../cp/user/user.decorator");
const user_entity_1 = require("../../cp/enity/user.entity");
const user_dto_1 = require("../../cp/user/user.dto");
const productDto_1 = require("../entity/productDto");
const auth_decorator_1 = require("../../guards/auth.decorator");
let FarmerController = class FarmerController {
    constructor(farmerService) {
        this.farmerService = farmerService;
    }
    getFarmerWallets(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.farmerService.getFarmerWallets();
        });
    }
    validateFarmer(user, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.farmerService.validateFarmer(filters.customerId);
        });
    }
    getFarmerCardNumber(user, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.farmerService.getFarmerCardNumber(filters.customerId, filters.walletReferenceCode);
        });
    }
    getProducts(user, req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.farmerService.getFarmerProducts(payload);
        });
    }
    orderProduct(user, req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.farmerService.processOrder(payload, user);
        });
    }
    SendOtp(user, req, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.farmerService.sendOtp(payload);
        });
    }
    findTransaction(user, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.farmerService.getTransactions(filters);
        });
    }
};
__decorate([
    common_1.Get('program_wallets'),
    __param(0, user_decorator_1.UserAuth()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FarmerController.prototype, "getFarmerWallets", null);
__decorate([
    common_1.Get('validate'),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], FarmerController.prototype, "validateFarmer", null);
__decorate([
    common_1.Get('card'),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], FarmerController.prototype, "getFarmerCardNumber", null);
__decorate([
    common_1.Post('products'),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Req()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object, productDto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], FarmerController.prototype, "getProducts", null);
__decorate([
    common_1.Post('post_order'),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Req()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object, productDto_1.OrderDto]),
    __metadata("design:returntype", Promise)
], FarmerController.prototype, "orderProduct", null);
__decorate([
    common_1.Post('send_otp'),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Req()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object, user_dto_1.farmerOtpDTO]),
    __metadata("design:returntype", Promise)
], FarmerController.prototype, "SendOtp", null);
__decorate([
    common_1.Get('transactions'),
    common_1.HttpCode(200),
    __param(0, user_decorator_1.UserAuth()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], FarmerController.prototype, "findTransaction", null);
FarmerController = __decorate([
    common_1.Controller('farmer'),
    auth_decorator_1.Auth(),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [farmer_service_1.FarmerService])
], FarmerController);
exports.FarmerController = FarmerController;
//# sourceMappingURL=farmer.controller.js.map