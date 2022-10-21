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
exports.passwordDTO = exports.validateotpDTO = exports.farmerOtpDTO = exports.otpDTO = exports.validateUserDTO = exports.LoginUserDTO = exports.UserApprovalDTO = exports.UserDTO = void 0;
const class_validator_1 = require("class-validator");
class UserDTO {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsDefined({
        message: 'Username is required',
    }),
    class_validator_1.IsAlphanumeric('en-US', {
        message: 'Only characters and numbers allowed',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "Username", void 0);
__decorate([
    class_validator_1.IsNumberString(),
    class_validator_1.IsDefined({
        message: 'Mobile number is required',
    }),
    class_validator_1.IsAlphanumeric('en-US', {
        message: 'Only numbers allowed',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "Mobile", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Department is required',
    }),
    __metadata("design:type", Object)
], UserDTO.prototype, "Department", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsDefined({
        message: 'Last name is required',
    }),
    class_validator_1.IsAlphanumeric('en-US', {
        message: 'Only characters and numbers allowed',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "LastName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UserDTO.prototype, "MiddleName", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsAlphanumeric('en-US', {
        message: 'Only characters and numbers allowed',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "FirstName", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UserDTO.prototype, "ExpiryDate", void 0);
__decorate([
    class_validator_1.ArrayNotEmpty({
        message: 'Atleast one permission must be selected',
    }),
    __metadata("design:type", Array)
], UserDTO.prototype, "Roles", void 0);
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.IsAlphanumeric('en-US', {
        message: 'Only characters and numbers allowed',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "PFID", void 0);
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserDTO.prototype, "Email", void 0);
__decorate([
    class_validator_1.IsDefined(),
    __metadata("design:type", Number)
], UserDTO.prototype, "Status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UserDTO.prototype, "roleName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UserDTO.prototype, "deptName", void 0);
exports.UserDTO = UserDTO;
class UserApprovalDTO {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Approval flag is required',
    }),
    __metadata("design:type", Number)
], UserApprovalDTO.prototype, "ApprovedFlag", void 0);
exports.UserApprovalDTO = UserApprovalDTO;
class LoginUserDTO {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Username is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "username", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Password is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "password", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "ip", void 0);
exports.LoginUserDTO = LoginUserDTO;
class validateUserDTO {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Username is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], validateUserDTO.prototype, "username", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], validateUserDTO.prototype, "ip", void 0);
exports.validateUserDTO = validateUserDTO;
class otpDTO {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Username is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], otpDTO.prototype, "username", void 0);
exports.otpDTO = otpDTO;
class farmerOtpDTO {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'National ID is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], farmerOtpDTO.prototype, "nationalId", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Products are required',
    }),
    __metadata("design:type", Array)
], farmerOtpDTO.prototype, "products", void 0);
exports.farmerOtpDTO = farmerOtpDTO;
class validateotpDTO {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Username is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], validateotpDTO.prototype, "username", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'OTP code is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], validateotpDTO.prototype, "otp", void 0);
exports.validateotpDTO = validateotpDTO;
class passwordDTO {
}
__decorate([
    class_validator_1.IsDefined({
        message: 'Username is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], passwordDTO.prototype, "username", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Password is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], passwordDTO.prototype, "password", void 0);
__decorate([
    class_validator_1.IsDefined({
        message: 'Confirm Password is required',
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], passwordDTO.prototype, "confirmPassword", void 0);
exports.passwordDTO = passwordDTO;
//# sourceMappingURL=user.dto.js.map