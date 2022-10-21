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
exports.Otp = void 0;
const typeorm_1 = require("typeorm");
let Otp = class Otp {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'ID' }),
    __metadata("design:type", Number)
], Otp.prototype, "ID", void 0);
__decorate([
    typeorm_1.Column({ name: 'TERMINAL_ID' }),
    __metadata("design:type", String)
], Otp.prototype, "TerminalID", void 0);
__decorate([
    typeorm_1.Column({ name: 'OTP_GENERATION_TIME' }),
    __metadata("design:type", Date)
], Otp.prototype, "AutoGenerationTime", void 0);
__decorate([
    typeorm_1.Column({ name: 'OTP_UTILIZED' }),
    __metadata("design:type", Number)
], Otp.prototype, "OtpUtilized", void 0);
__decorate([
    typeorm_1.Column({ name: 'OTP_UTILIZED_TIME' }),
    __metadata("design:type", Date)
], Otp.prototype, "OtpUtilizedTime", void 0);
__decorate([
    typeorm_1.Column({ name: 'OTP_EXPIRED' }),
    __metadata("design:type", Number)
], Otp.prototype, "OtpExpired", void 0);
__decorate([
    typeorm_1.Column({ name: 'OTP_EXPIRED_TIME' }),
    __metadata("design:type", Date)
], Otp.prototype, "OtpExpiredTime", void 0);
__decorate([
    typeorm_1.Column({ name: 'OTP' }),
    __metadata("design:type", String)
], Otp.prototype, "Otp", void 0);
Otp = __decorate([
    typeorm_1.Entity('OTP', {
        orderBy: {
            ID: 'DESC',
        },
    })
], Otp);
exports.Otp = Otp;
//# sourceMappingURL=otp.entity.js.map