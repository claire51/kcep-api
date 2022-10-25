import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TransactionDetailsEntity} from "./transaction_details.entity";

@Entity('KUSER.TRANSACTIONS', {
    orderBy: {
        id: 'DESC',
    },
})
export class TransactionEntity {
    @PrimaryGeneratedColumn({ name: 'ID' })
    id: string;
    @Column({ name: 'TRANSACTIONREFERENCENUMBER' })
    transactionReference: string;
    @Column({ name: 'SPCODE' })
    spCode: string;
    @Column({ name: 'TRANSACTIONAMOUNTTOTAL' })
    transactionAmtTotal: number;
    @Column({ name: 'TRANSACTIONDATE' })
    transactionDate: Date;
    @Column({ name: 'CREATEDBY' })
    createdBy: number;
    @Column({ name: 'UPDATEDBY' })
    updatedBy: number;
    @Column({ name: 'SEASON_ID' })
    seasonId: number;
    @Column({ name: 'MERCHANTCODE' })
    merchantCode: number;
    @Column({ name: 'ACCOUNT_NUMBER' })
    accountNumber: number;
    @Column({ name: 'WALLET_REFERENCE_CODE' })
    walletReferenceCode: string;
    @Column({ name: 'DATECREATED' })
    datecreated: Date;
    @Column({ name: 'DATEUPDATED' })
    dateupdated: Date;
    @OneToMany(() => TransactionDetailsEntity, (transactionDetail) => transactionDetail.transaction, {eager: true})
    details: TransactionDetailsEntity[];

}
