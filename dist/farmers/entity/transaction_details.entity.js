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
exports.TransactionDetailsEntity = void 0;
const typeorm_1 = require("typeorm");
const transaction_entity_1 = require("./transaction.entity");
let TransactionDetailsEntity = class TransactionDetailsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'ID' }),
    __metadata("design:type", String)
], TransactionDetailsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'REGIONPRICE' }),
    __metadata("design:type", Number)
], TransactionDetailsEntity.prototype, "regionPrice", void 0);
__decorate([
    typeorm_1.Column({ name: 'PRODUCT_ITEM_CODE' }),
    __metadata("design:type", String)
], TransactionDetailsEntity.prototype, "productCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'TRANSACTIONPRICE' }),
    __metadata("design:type", Number)
], TransactionDetailsEntity.prototype, "transactionPrice", void 0);
__decorate([
    typeorm_1.Column({ name: 'TRANSACTIONQUANTITY' }),
    __metadata("design:type", Number)
], TransactionDetailsEntity.prototype, "transactionQuantity", void 0);
__decorate([
    typeorm_1.Column({ name: 'UPDATEDBY' }),
    __metadata("design:type", Number)
], TransactionDetailsEntity.prototype, "updatedBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'CREATEDBY' }),
    __metadata("design:type", Number)
], TransactionDetailsEntity.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'REGIONREF_CODE' }),
    __metadata("design:type", String)
], TransactionDetailsEntity.prototype, "regionRefCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'DATECREATED' }),
    __metadata("design:type", Date)
], TransactionDetailsEntity.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column({ name: 'DATEUPDATED' }),
    __metadata("design:type", Date)
], TransactionDetailsEntity.prototype, "dateupdated", void 0);
__decorate([
    typeorm_1.ManyToOne(type => transaction_entity_1.TransactionEntity, transc => transc.details),
    typeorm_1.JoinColumn({ name: 'TRANSACTION_ID' }),
    __metadata("design:type", transaction_entity_1.TransactionEntity)
], TransactionDetailsEntity.prototype, "transaction", void 0);
TransactionDetailsEntity = __decorate([
    typeorm_1.Entity('KUSER.TRANSACTION_DETAILS', {
        orderBy: {
            id: 'DESC',
        },
    })
], TransactionDetailsEntity);
exports.TransactionDetailsEntity = TransactionDetailsEntity;
//# sourceMappingURL=transaction_details.entity.js.map