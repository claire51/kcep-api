import { BaseEntity } from '../../shared/base.entity';
export declare class User extends BaseEntity {
    UserID: string;
    username: string;
    UpdatedBy: number;
    MerchantID: string;
    PhoneNumber: string;
    EmailAddress: string;
    Password: string;
    ApprovedBy: number;
    Remarks: number;
    FirstPassword: number;
    get sign(): User;
}
