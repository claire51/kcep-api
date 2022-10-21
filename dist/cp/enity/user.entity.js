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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const jwt = require("jsonwebtoken");
const base_entity_1 = require("../../shared/base.entity");
const report_1 = require("../../config/report");
let User = class User extends base_entity_1.BaseEntity {
    get sign() {
        const { UserID, Password } = this;
        const token = jwt.sign({
            UserID,
            Password,
        }, process.env.JWT_SECRET, { expiresIn: report_1.expiry.duration });
        return Object.assign(Object.assign({}, this), { token });
    }
};
__decorate([
    typeorm_1.PrimaryColumn({ name: 'TERMINAL_ID' }),
    __metadata("design:type", String)
], User.prototype, "UserID", void 0);
__decorate([
    typeorm_1.Column({ name: 'TERMINAL_ID' }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ name: 'UPDATED_BY' }),
    __metadata("design:type", Number)
], User.prototype, "UpdatedBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'MERCHANT_ID' }),
    __metadata("design:type", String)
], User.prototype, "MerchantID", void 0);
__decorate([
    typeorm_1.Column({ name: 'PHONE_NUMBER' }),
    __metadata("design:type", String)
], User.prototype, "PhoneNumber", void 0);
__decorate([
    typeorm_1.Column({ name: 'EMAIL_ADDRESS' }),
    __metadata("design:type", String)
], User.prototype, "EmailAddress", void 0);
__decorate([
    typeorm_1.Column({ name: 'PASSWORD_HASH' }),
    __metadata("design:type", String)
], User.prototype, "Password", void 0);
__decorate([
    typeorm_1.Column({ name: 'APPROVED_BY' }),
    __metadata("design:type", Number)
], User.prototype, "ApprovedBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'REMARKS' }),
    __metadata("design:type", Number)
], User.prototype, "Remarks", void 0);
__decorate([
    typeorm_1.Column({ name: 'FIRSTLOGINPASSWORD' }),
    __metadata("design:type", Number)
], User.prototype, "FirstPassword", void 0);
User = __decorate([
    typeorm_1.Entity('AGRODEALER_LOGIN_DETAILS', {
        orderBy: {
            CreatedAt: 'DESC',
        },
    })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map