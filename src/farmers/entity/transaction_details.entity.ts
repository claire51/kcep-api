import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {TransactionEntity} from "./transaction.entity";

@Entity('KUSER.TRANSACTION_DETAILS', {
    orderBy: {
        id: 'DESC',
    },
})
export class TransactionDetailsEntity {
    @PrimaryGeneratedColumn({ name: 'ID' })
    id: string;
    @Column({ name: 'REGIONPRICE' })
    regionPrice: number;
    @Column({ name: 'PRODUCT_ITEM_CODE' })
    productCode: string;
    @Column({ name: 'TRANSACTIONPRICE' })
    transactionPrice: number;
    @Column({ name: 'TRANSACTIONQUANTITY' })
    transactionQuantity: number;
    @Column({ name: 'UPDATEDBY' })
    updatedBy: number;
    @Column({ name: 'CREATEDBY' })
    createdBy: number;
    @Column({ name: 'REGIONREF_CODE' })
    regionRefCode: string;
    @Column({ name: 'DATECREATED' })
    datecreated: Date;
    @Column({ name: 'DATEUPDATED' })
    dateupdated: Date;
    @ManyToOne(type => TransactionEntity, transc => transc.details)
    @JoinColumn({name : 'TRANSACTION_ID'})
    transaction: TransactionEntity;
}
