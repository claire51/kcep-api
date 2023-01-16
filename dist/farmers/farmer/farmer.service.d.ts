import { Repository } from "typeorm";
import { ProgramWalletsEntity } from "../entity/program-wallets.entity";
import { IzadPanMapEntity } from "../entity/izad-pan-map.entity";
import { CustomersEntity } from "../entity/customers.entity";
import { ItemDto, OrderDto, ProductDto } from "../entity/productDto";
import { farmerOtpDTO } from "../../cp/user/user.dto";
import { Otp } from "../../cp/enity/otp.entity";
import { User } from "../../cp/enity/user.entity";
import { AgrodealerAccountsEntity } from "../../cp/enity/agrodealer-accounts.entity";
import { TransactionEntity } from "../entity/transaction.entity";
import { Pagination } from "nestjs-typeorm-paginate";
export declare class FarmerService {
    private readonly customersRepository;
    private readonly otpRepository;
    private readonly programWalletsRepository;
    private readonly izadPanMapRepository;
    private readonly agrodealerAccountsRepository;
    private readonly transactionRepository;
    constructor(customersRepository: Repository<CustomersEntity>, otpRepository: Repository<Otp>, programWalletsRepository: Repository<ProgramWalletsEntity>, izadPanMapRepository: Repository<IzadPanMapEntity>, agrodealerAccountsRepository: Repository<AgrodealerAccountsEntity>, transactionRepository: Repository<TransactionEntity>);
    getFarmerWallets(): Promise<ProgramWalletsEntity[]>;
    getTransactions(options?: any): Promise<Pagination<TransactionEntity>>;
    validateFarmer(customerId: any): Promise<CustomersEntity>;
    getFarmerProducts(payload: ProductDto): Promise<any[]>;
    processOrder(payload: OrderDto, user: User): Promise<{
        processed: boolean;
        message: any;
        messageCode: any;
        rtps_ref: any;
        balance: any;
    } | {
        processed: boolean;
        message: any;
        messageCode: any;
        rtps_ref: number;
        balance?: undefined;
    }>;
    getFarmerCardNumber(customerId: string, wallet: string): Promise<any>;
    generateBalance(data: any): Promise<{
        PanNo: any;
        ProductType: any;
        CardStatus: any;
        CardCurrency: any;
        AvailableAmount: any;
    }>;
    getCardBalance(pan: string): Promise<any>;
    processCardTransactions(data: any): Promise<any>;
    findProducts(data: ProductDto): Promise<any>;
    postNotification(data: OrderDto, paymentID: any): Promise<any>;
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
    randomString(len: any): string;
    isNumeric(num: any): boolean;
}
