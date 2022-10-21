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
exports.AgrodealerAccountsEntity = void 0;
const typeorm_1 = require("typeorm");
let AgrodealerAccountsEntity = class AgrodealerAccountsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'ID' }),
    __metadata("design:type", Number)
], AgrodealerAccountsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'DEALER_ACCOUNT' }),
    __metadata("design:type", String)
], AgrodealerAccountsEntity.prototype, "dealerAccount", void 0);
__decorate([
    typeorm_1.Column({ name: 'BUSINESSNAME' }),
    __metadata("design:type", String)
], AgrodealerAccountsEntity.prototype, "businessName", void 0);
__decorate([
    typeorm_1.Column({ name: 'MERCHANT_CODE' }),
    __metadata("design:type", String)
], AgrodealerAccountsEntity.prototype, "merchantCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'CUSTOMER_ID' }),
    __metadata("design:type", Number)
], AgrodealerAccountsEntity.prototype, "customerID", void 0);
__decorate([
    typeorm_1.Column({ name: 'STATUS_ID' }),
    __metadata("design:type", Number)
], AgrodealerAccountsEntity.prototype, "statusId", void 0);
__decorate([
    typeorm_1.Column({ name: 'WARD_ID' }),
    __metadata("design:type", Number)
], AgrodealerAccountsEntity.prototype, "wardId", void 0);
AgrodealerAccountsEntity = __decorate([
    typeorm_1.Entity('KUSER.AGRO_DEALER_ACCOUNTS', {
        orderBy: {
            id: 'DESC',
        },
    })
], AgrodealerAccountsEntity);
exports.AgrodealerAccountsEntity = AgrodealerAccountsEntity;
//# sourceMappingURL=agrodealer-accounts.entity.js.map