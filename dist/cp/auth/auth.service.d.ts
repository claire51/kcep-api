export declare class AuthService {
    constructor();
    ldap(upn: string, password: string): Promise<boolean>;
    logout(userid: any): Promise<void>;
}
