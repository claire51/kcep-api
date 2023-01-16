import { TransactionDetailsEntity } from "./transaction_details.entity";
export declare class TransactionEntity {
    id: string;
    transactionReference: string;
    spCode: string;
    transactionAmtTotal: number;
    transactionDate: Date;
    createdBy: number;
    updatedBy: number;
    seasonId: number;
    merchantCode: number;
    accountNumber: number;
    walletReferenceCode: string;
    datecreated: Date;
    dateupdated: Date;
    details: TransactionDetailsEntity[];
}
