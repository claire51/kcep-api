import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('ISSUING2_0.IZD_PAN_MAP', {
    orderBy: {
        card: 'DESC',
    },
})
export class IzadPanMapEntity {
    @PrimaryGeneratedColumn({ name: 'CARD' })
    card: string;
    @Column({ name: 'PAN' })
    pan: string;
    @Column({ name: 'SUFIKS' })
    sufiks: string;
    @Column({ name: 'BANK_C' })
    bankc: string;
    @Column({ name: 'GROUPC' })
    groupc: string;
    @Column({ name: 'DEL_FLAG' })
    delFlag: string;
}
