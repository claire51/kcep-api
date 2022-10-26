import { TransactionEntity } from "./transaction.entity";
export declare class TransactionDetailsEntity {
    id: string;
    regionPrice: number;
    productCode: string;
    transactionPrice: number;
    transactionQuantity: number;
    updatedBy: number;
    createdBy: number;
    regionRefCode: string;
    datecreated: Date;
    dateupdated: Date;
    transaction: TransactionEntity;
}
