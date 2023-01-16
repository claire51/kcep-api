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
exports.IzadPanMapEntity = void 0;
const typeorm_1 = require("typeorm");
let IzadPanMapEntity = class IzadPanMapEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'CARD' }),
    __metadata("design:type", String)
], IzadPanMapEntity.prototype, "card", void 0);
__decorate([
    typeorm_1.Column({ name: 'PAN' }),
    __metadata("design:type", String)
], IzadPanMapEntity.prototype, "pan", void 0);
__decorate([
    typeorm_1.Column({ name: 'SUFIKS' }),
    __metadata("design:type", String)
], IzadPanMapEntity.prototype, "sufiks", void 0);
__decorate([
    typeorm_1.Column({ name: 'BANK_C' }),
    __metadata("design:type", String)
], IzadPanMapEntity.prototype, "bankc", void 0);
__decorate([
    typeorm_1.Column({ name: 'GROUPC' }),
    __metadata("design:type", String)
], IzadPanMapEntity.prototype, "groupc", void 0);
__decorate([
    typeorm_1.Column({ name: 'DEL_FLAG' }),
    __metadata("design:type", String)
], IzadPanMapEntity.prototype, "delFlag", void 0);
IzadPanMapEntity = __decorate([
    typeorm_1.Entity('ISSUING2_0.IZD_PAN_MAP', {
        orderBy: {
            card: 'DESC',
        },
    })
], IzadPanMapEntity);
exports.IzadPanMapEntity = IzadPanMapEntity;
//# sourceMappingURL=izad-pan-map.entity.js.map