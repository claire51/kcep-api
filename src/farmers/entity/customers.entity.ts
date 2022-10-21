import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('KUSER.CUSTOMERS', {
    orderBy: {
        id: 'DESC',
    },
})
export class CustomersEntity {
    @PrimaryGeneratedColumn({ name: 'ID' })
    id: string;
    @Column({ name: 'ID_NUMBER' })
    idNumber: string;
    @Column({ name: 'FIRSTNAME' })
    firstName: string;
    @Column({ name: 'LASTNAME' })
    lastName: string;
    @Column({ name: 'MIDDLENAME' })
    middleName: string;
    @Column({ name: 'GENDER' })
    gender: string;
    @Column({ name: 'CATEGORY' })
    category: string;
    @Column({ name: 'PHONENUMBER' })
    phoneNumber: string;
    @Column({ name: 'CLIENTID' })
    clientId: number;
    @Column({ name: 'STATUS' })
    status: number;
    @Column({ name: 'PROGRAMME' })
    program: string;
    @Column({ name: 'FARMSIZE' })
    farmSize: number;
    @Column({ name: 'CARDCREATIONSTATUS' })
    cardCreationStatus: string;
    @Column({ name: 'IPRSVALIDATIONSTATUS' })
    iprsValidation: string;
    @Column({ name: 'LOCATION' })
    location: string;
    @Column({ name: 'SUBLOCATION' })
    subLocation: string;
    @Column({ name: 'TOWN' })
    town: string;
    @Column({ name: 'VILLAGE' })
    village: string;
    @Column({ name: 'CUSTOMER_TYPE_ID' })
    customerTypeId: number;
    @Column({ name: 'WARD_ID' })
    wardId: number;
    @Column({ name: 'COMBID' })
    combId: number;
}
