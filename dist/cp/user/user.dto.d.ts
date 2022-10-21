import { ItemDto } from "../../farmers/entity/productDto";
export declare class UserDTO {
    readonly Username: string;
    readonly Mobile: string;
    readonly Department: any;
    readonly LastName: string;
    readonly MiddleName: string;
    readonly FirstName: string;
    readonly ExpiryDate: string;
    readonly Roles: number[];
    readonly IsAdmin: number;
    readonly ApprovedFlag: number;
    readonly PFID: string;
    Email: string;
    Status: number;
    roleName: string;
    deptName: string;
}
export declare class UserApprovalDTO {
    readonly ApprovedFlag: number;
}
export declare class LoginUserDTO {
    username: string;
    password: string;
    readonly ip: string;
}
export declare class validateUserDTO {
    username: string;
    readonly ip: string;
}
export declare class otpDTO {
    username: string;
}
export declare class farmerOtpDTO {
    nationalId: string;
    products: ItemDto[];
}
export declare class validateotpDTO {
    username: string;
    otp: string;
}
export declare class passwordDTO {
    username: string;
    password: string;
    confirmPassword: string;
}
