import { Repository } from "typeorm";
import { ProgramWalletsEntity } from "../entity/program-wallets.entity";
import { IzadPanMapEntity } from "../entity/izad-pan-map.entity";
import { CustomersEntity } from "../entity/customers.entity";
import { ItemDto, OrderDto, ProductDto } from "../entity/productDto";
import { farmerOtpDTO } from "../../cp/user/user.dto";
import { Otp } from "../../cp/enity/otp.entity";
import { User } from "../../cp/enity/user.entity";
export declare class FarmerService {
    private readonly customersRepository;
    private readonly otpRepository;
    private readonly programWalletsRepository;
    private readonly izadPanMapRepository;
    constructor(customersRepository: Repository<CustomersEntity>, otpRepository: Repository<Otp>, programWalletsRepository: Repository<ProgramWalletsEntity>, izadPanMapRepository: Repository<IzadPanMapEntity>);
    getFarmerWallets(): Promise<ProgramWalletsEntity[]>;
    validateFarmer(customerId: any): Promise<CustomersEntity>;
    getFarmerProducts(payload: ProductDto): Promise<any[]>;
    processOrder(payload: OrderDto, user: User): Promise<{
        processed: boolean;
        message: any;
        messageCode: any;
        rtps_ref: string;
    }>;
    getFarmerCardNumber(customerId: string, wallet: string): Promise<any>;
    findProducts(data: ProductDto): Promise<any>;
    postNotification(data: OrderDto): Promise<any>;
    uuid(n: any): string;
    generateStatus(status: any): Promise<{
        type: any;
        applicationId: any;
        code: any;
        description: any;
    }>;
    generateProductData(summary: any): Promise<any[]>;
    sendOtp({ nationalId, products }: farmerOtpDTO): Promise<any>;
    generateOtp(n: any): Promise<number>;
    getProductSMS(items: ItemDto[]): Promise<string>;
    sendSMSSoap(data: any): Promise<void>;
    formatMoney(value: any): any;
}
