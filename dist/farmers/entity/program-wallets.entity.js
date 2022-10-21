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
exports.ProgramWalletsEntity = void 0;
const typeorm_1 = require("typeorm");
let ProgramWalletsEntity = class ProgramWalletsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'ID' }),
    __metadata("design:type", Number)
], ProgramWalletsEntity.prototype, "ID", void 0);
__decorate([
    typeorm_1.Column({ name: 'PROGRAMME_NAME' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "programName", void 0);
__decorate([
    typeorm_1.Column({ name: 'PROGRAMME_CODE' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "programCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'CMS_PRODUCT_CODE' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "cmsProductCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'PROGRAMME' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "program", void 0);
__decorate([
    typeorm_1.Column({ name: 'WALLET_NAME' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "walletName", void 0);
__decorate([
    typeorm_1.Column({ name: 'WALLET_REFERENCE_CODE' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "walletReferenceCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'RISKLEVEL' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "riskLevel", void 0);
__decorate([
    typeorm_1.Column({ name: 'PREFIX' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "prefix", void 0);
__decorate([
    typeorm_1.Column({ name: 'DESCRIPTION' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'CONDITIONSET' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "conditionSet", void 0);
__decorate([
    typeorm_1.Column({ name: 'BINCODE' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "binCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'APPID' }),
    __metadata("design:type", String)
], ProgramWalletsEntity.prototype, "appId", void 0);
ProgramWalletsEntity = __decorate([
    typeorm_1.Entity('PROGRAM_WALLETS', {
        orderBy: {
            ID: 'DESC',
        },
    })
], ProgramWalletsEntity);
exports.ProgramWalletsEntity = ProgramWalletsEntity;
//# sourceMappingURL=program-wallets.entity.js.map