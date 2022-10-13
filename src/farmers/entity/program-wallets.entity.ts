import {
    Entity,
    Column, PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('PROGRAM_WALLETS', {
    orderBy: {
        ID: 'DESC',
    },
})
export class ProgramWalletsEntity {
    @PrimaryGeneratedColumn({ name: 'ID' })
    ID: number;
    @Column({ name: 'PROGRAMME_NAME' })
    programName: string;
    @Column({ name: 'PROGRAMME_CODE' })
    programCode: string;
    @Column({ name: 'CMS_PRODUCT_CODE' })
    cmsProductCode: string;
    @Column({ name: 'PROGRAMME' })
    program: string;
    @Column({ name: 'WALLET_NAME' })
    walletName: string;
    @Column({ name: 'WALLET_REFERENCE_CODE' })
    walletReferenceCode: string;
    @Column({ name: 'RISKLEVEL' })
    riskLevel: string;
    @Column({ name: 'PREFIX' })
    prefix: string;
    @Column({ name: 'DESCRIPTION' })
    description: string;
    @Column({ name: 'CONDITIONSET' })
    conditionSet: string;
    @Column({ name: 'BINCODE' })
    binCode: string;
    @Column({ name: 'APPID' })
    appId: string;
}
