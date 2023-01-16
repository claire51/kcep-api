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
exports.CustomersEntity = void 0;
const typeorm_1 = require("typeorm");
let CustomersEntity = class CustomersEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'ID' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'ID_NUMBER' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "idNumber", void 0);
__decorate([
    typeorm_1.Column({ name: 'FIRSTNAME' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ name: 'LASTNAME' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ name: 'MIDDLENAME' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column({ name: 'GENDER' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ name: 'CATEGORY' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "category", void 0);
__decorate([
    typeorm_1.Column({ name: 'PHONENUMBER' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column({ name: 'CLIENTID' }),
    __metadata("design:type", Number)
], CustomersEntity.prototype, "clientId", void 0);
__decorate([
    typeorm_1.Column({ name: 'STATUS' }),
    __metadata("design:type", Number)
], CustomersEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ name: 'PROGRAMME' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "program", void 0);
__decorate([
    typeorm_1.Column({ name: 'FARMSIZE' }),
    __metadata("design:type", Number)
], CustomersEntity.prototype, "farmSize", void 0);
__decorate([
    typeorm_1.Column({ name: 'CARDCREATIONSTATUS' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "cardCreationStatus", void 0);
__decorate([
    typeorm_1.Column({ name: 'IPRSVALIDATIONSTATUS' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "iprsValidation", void 0);
__decorate([
    typeorm_1.Column({ name: 'LOCATION' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "location", void 0);
__decorate([
    typeorm_1.Column({ name: 'SUBLOCATION' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "subLocation", void 0);
__decorate([
    typeorm_1.Column({ name: 'TOWN' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "town", void 0);
__decorate([
    typeorm_1.Column({ name: 'VILLAGE' }),
    __metadata("design:type", String)
], CustomersEntity.prototype, "village", void 0);
__decorate([
    typeorm_1.Column({ name: 'CUSTOMER_TYPE_ID' }),
    __metadata("design:type", Number)
], CustomersEntity.prototype, "customerTypeId", void 0);
__decorate([
    typeorm_1.Column({ name: 'WARD_ID' }),
    __metadata("design:type", Number)
], CustomersEntity.prototype, "wardId", void 0);
__decorate([
    typeorm_1.Column({ name: 'COMBID' }),
    __metadata("design:type", Number)
], CustomersEntity.prototype, "combId", void 0);
CustomersEntity = __decorate([
    typeorm_1.Entity('KUSER.CUSTOMERS', {
        orderBy: {
            id: 'DESC',
        },
    })
], CustomersEntity);
exports.CustomersEntity = CustomersEntity;
//# sourceMappingURL=customers.entity.js.map