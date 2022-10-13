import {IsDefined, IsOptional} from "class-validator";

export class ProductDto {
    @IsDefined({
        message: 'Merchant code is required',
    })
    readonly merchantCode: string;
    @IsDefined({
        message: 'Wallet account number  is required',
    })
    readonly walletAccountNumber: string;
    @IsDefined({
        message: 'Wallet Reference Code  is required',
    })
    readonly walletReferenceCode: string;
}

export class OrderDto {
    @IsDefined({
        message: 'Merchant code is required',
    })
    readonly merchantCode: string;
    @IsDefined({
        message: 'Wallet account number  is required',
    })
    readonly walletAccountNumber: string;
    @IsDefined({
        message: 'Wallet Reference Code  is required',
    })
    readonly walletReferenceCode: string;
    @IsDefined({
        message: 'Wallet Reference Code  is required',
    })
    readonly transactionalAmount: string;
    @IsDefined({
        message: 'Product details are required',
    })
    readonly products: ItemDto [];
}

export class ItemDto {
    @IsDefined({
        message: 'Product service code is required',
    })
    readonly serviceCode: string;
    @IsOptional()
    readonly walletRefCode: string;
    @IsOptional()
    readonly unitPrice: number;
    @IsDefined({
        message: 'Region Price is required',
    })
    readonly regionPrice: number;
    @IsDefined({
        message: 'Region reference code is required',
    })
    readonly regionRefCode: string;
    @IsDefined({
        message: 'Transactional Price is required',
    })
    readonly transactionPrice: number;
    @IsDefined({
        message: 'Transactional Quantity is required',
    })
    readonly transactionQuantity: number;
    @IsOptional()
    readonly quantity: string;
    @IsOptional()
    readonly priceRequired: string;
}
