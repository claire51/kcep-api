export declare class ProductDto {
    readonly merchantCode: string;
    readonly walletAccountNumber: string;
    readonly walletReferenceCode: string;
}
export declare class OrderDto {
    readonly merchantCode: string;
    readonly walletAccountNumber: string;
    readonly walletReferenceCode: string;
    readonly nationalId: string;
    readonly transactionalAmount: string;
    readonly products: ItemDto[];
}
export declare class ItemDto {
    readonly serviceCode: string;
    readonly walletRefCode: string;
    readonly unitPrice: number;
    readonly regionPrice: number;
    readonly regionRefCode: string;
    readonly transactionPrice: number;
    readonly transactionQuantity: number;
    readonly quantity: string;
    readonly priceRequired: string;
}
