import {
    IsString,
    IsDefined,
    IsAlphanumeric,
    MinLength,
    Validate,
    ArrayNotEmpty,
    IsEmail, IsNumberString, IsOptional, IsNumber,
} from 'class-validator';
import {ItemDto} from "../../farmers/entity/productDto";

export class UserDTO {

    @IsString()
    @IsDefined({
        message: 'Username is required',
    })
    @IsAlphanumeric('en-US', {
        message: 'Only characters and numbers allowed',
    })
    readonly Username: string;
    @IsNumberString()
    @IsDefined({
        message: 'Mobile number is required',
    })
    @IsAlphanumeric('en-US', {
        message: 'Only numbers allowed',
    })
    readonly Mobile: string;
    @IsDefined({
        message: 'Department is required',
    })
    readonly Department: any;

    @IsString()
    @IsDefined({
        message: 'Last name is required',
    })
    @IsAlphanumeric('en-US', {
        message: 'Only characters and numbers allowed',
    })
    readonly LastName: string;

    @IsOptional()
    readonly MiddleName: string;

    @IsString()
    @IsAlphanumeric('en-US', {
        message: 'Only characters and numbers allowed',
    })
    readonly FirstName: string;

    @IsString()
    readonly ExpiryDate: string;

    @ArrayNotEmpty({
        message: 'Atleast one permission must be selected',
    })
    readonly Roles: number[];
    readonly IsAdmin: number;
    readonly ApprovedFlag: number;
    @IsDefined()
    @IsAlphanumeric('en-US', {
        message: 'Only characters and numbers allowed',
    })
    readonly PFID: string;
    @IsDefined()
    @IsEmail()
    Email: string;
    @IsDefined()
    Status: number;
    @IsOptional()
    roleName: string;
    @IsOptional()
    deptName: string;
}

export class UserApprovalDTO {
    @IsDefined({
        message: 'Approval flag is required',
    })
    readonly ApprovedFlag: number;
}

export class LoginUserDTO {
    @IsDefined({
        message: 'Username is required',
    })
    @IsString()
    username: string;

    @IsDefined({
        message: 'Password is required',
    })
    @IsString()
    password: string;
    @IsOptional()
    readonly ip: string;
}

export class validateUserDTO {
    @IsDefined({
        message: 'Username is required',
    })
    @IsString()
    username: string;
    @IsOptional()
    readonly ip: string;
}

export class otpDTO {
    @IsDefined({
        message: 'Username is required',
    })
    @IsString()
    username: string;
}

export class phoneOtpDTO {
    @IsDefined({
        message: 'Mobile Number is required',
    })
    @IsString()
    mobileNumber: string;
    @IsDefined({
        message: 'Request type is required (1 for username and 2 for password recovery)',
    })
    @IsNumber()
    type: number;
}
export class farmerOtpDTO {
    @IsDefined({
        message: 'National ID is required',
    })
    @IsString()
    nationalId: string;
    @IsDefined({
        message: 'Products are required',
    })
    products: ItemDto[];
}

export class validateotpDTO {
    @IsDefined({
        message: 'Username is required',
    })
    @IsString()
    username: string;
    @IsDefined({
        message: 'OTP code is required',
    })
    @IsString()
    otp: string;
}

export class passwordDTO {
    @IsDefined({
        message: 'Username is required',
    })
    @IsString()
    username: string;

    @IsDefined({
        message: 'Password is required',
    })
    @IsString()
    password: string;

    @IsDefined({
        message: 'Confirm Password is required',
    })
    @IsString()
    confirmPassword: string;
}
