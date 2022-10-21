import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('KUSER.AGRO_DEALER_ACCOUNTS', {
    orderBy: {
        id: 'DESC',
    },
})
export class AgrodealerAccountsEntity {
    @PrimaryGeneratedColumn({name: 'ID'})
    id: number;
    @Column({name: 'DEALER_ACCOUNT'})
    dealerAccount: string;
    @Column({name: 'BUSINESSNAME'})
    businessName: string;
    @Column({name: 'MERCHANT_CODE'})
    merchantCode: string;
    @Column({name: 'CUSTOMER_ID'})
    customerID: number;
    @Column({name: 'STATUS_ID'})
    statusId: number;
    @Column({name: 'WARD_ID'})
    wardId: number;
}
