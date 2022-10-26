import { FarmerService } from "./farmer.service";
import { User } from "../../cp/enity/user.entity";
import { Request } from "express";
import { farmerOtpDTO } from "../../cp/user/user.dto";
import { OrderDto, ProductDto } from "../entity/productDto";
export declare class FarmerController {
    private readonly farmerService;
    constructor(farmerService: FarmerService);
    getFarmerWallets(user: User): Promise<import("../entity/program-wallets.entity").ProgramWalletsEntity[]>;
    validateFarmer(user: User, filters: any): Promise<import("../entity/customers.entity").CustomersEntity>;
    getFarmerCardNumber(user: User, filters: any): Promise<any>;
    getProducts(user: User, req: Request, payload: ProductDto): Promise<any[]>;
    orderProduct(user: User, req: Request, payload: OrderDto): Promise<{
        processed: boolean;
        message: any;
        messageCode: any;
        rtps_ref: any;
    }>;
    SendOtp(user: User, req: Request, payload: farmerOtpDTO): Promise<any>;
    findTransaction(user: User, filters: any): Promise<import("nestjs-typeorm-paginate").Pagination<import("../entity/transaction.entity").TransactionEntity>>;
}
