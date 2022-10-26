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
exports.TransactionEntity = void 0;
const typeorm_1 = require("typeorm");
const transaction_details_entity_1 = require("./transaction_details.entity");
let TransactionEntity = class TransactionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'ID' }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'TRANSACTIONREFERENCENUMBER' }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "transactionReference", void 0);
__decorate([
    typeorm_1.Column({ name: 'SPCODE' }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "spCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'TRANSACTIONAMOUNTTOTAL' }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "transactionAmtTotal", void 0);
__decorate([
    typeorm_1.Column({ name: 'TRANSACTIONDATE' }),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "transactionDate", void 0);
__decorate([
    typeorm_1.Column({ name: 'CREATEDBY' }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'UPDATEDBY' }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "updatedBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'SEASON_ID' }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "seasonId", void 0);
__decorate([
    typeorm_1.Column({ name: 'MERCHANTCODE' }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "merchantCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'ACCOUNT_NUMBER' }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "accountNumber", void 0);
__decorate([
    typeorm_1.Column({ name: 'WALLET_REFERENCE_CODE' }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "walletReferenceCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'DATECREATED' }),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column({ name: 'DATEUPDATED' }),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "dateupdated", void 0);
__decorate([
    typeorm_1.OneToMany(() => transaction_details_entity_1.TransactionDetailsEntity, (transactionDetail) => transactionDetail.transaction, { eager: true }),
    __metadata("design:type", Array)
], TransactionEntity.prototype, "details", void 0);
TransactionEntity = __decorate([
    typeorm_1.Entity('KUSER.TRANSACTIONS', {
        orderBy: {
            id: 'DESC',
        },
    })
], TransactionEntity);
exports.TransactionEntity = TransactionEntity;
//# sourceMappingURL=transaction.entity.js.map