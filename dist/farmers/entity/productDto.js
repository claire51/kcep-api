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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDto = exports.OrderDto = exports.ProductDto = void 0;
const class_validator_1 = require("class-validator");
class ProductDto {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Merchant code is required',
    }),
    __metadata("design:type", String)
], ProductDto.prototype, "merchantCode", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Wallet account number  is required',
    }),
    __metadata("design:type", String)
], ProductDto.prototype, "walletAccountNumber", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Wallet Reference Code  is required',
    }),
    __metadata("design:type", String)
], ProductDto.prototype, "walletReferenceCode", void 0);
exports.ProductDto = ProductDto;
class OrderDto {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Merchant code is required',
    }),
    __metadata("design:type", String)
], OrderDto.prototype, "merchantCode", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Wallet account number  is required',
    }),
    __metadata("design:type", String)
], OrderDto.prototype, "walletAccountNumber", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Wallet Reference Code  is required',
    }),
    __metadata("design:type", String)
], OrderDto.prototype, "walletReferenceCode", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'National ID is required',
    }),
    __metadata("design:type", String)
], OrderDto.prototype, "nationalId", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Wallet Reference Code  is required',
    }),
    __metadata("design:type", String)
], OrderDto.prototype, "transactionalAmount", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Product details are required',
    }),
    __metadata("design:type", Array)
], OrderDto.prototype, "products", void 0);
exports.OrderDto = OrderDto;
class ItemDto {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Product service code is required',
    }),
    __metadata("design:type", String)
], ItemDto.prototype, "serviceCode", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], ItemDto.prototype, "walletRefCode", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], ItemDto.prototype, "unitPrice", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Region Price is required',
    }),
    __metadata("design:type", Number)
], ItemDto.prototype, "regionPrice", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Region reference code is required',
    }),
    __metadata("design:type", String)
], ItemDto.prototype, "regionRefCode", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Transactional Price is required',
    }),
    __metadata("design:type", Number)
], ItemDto.prototype, "transactionPrice", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Transactional Quantity is required',
    }),
    __metadata("design:type", Number)
], ItemDto.prototype, "transactionQuantity", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], ItemDto.prototype, "quantity", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], ItemDto.prototype, "priceRequired", void 0);
exports.ItemDto = ItemDto;
//# sourceMappingURL=productDto.js.map