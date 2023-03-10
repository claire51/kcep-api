import {Global, Module, NestModule} from '@nestjs/common';
import { FarmerController } from './farmer/farmer.controller';
import { FarmerService } from './farmer/farmer.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProgramWalletsEntity} from "./entity/program-wallets.entity";
import {AuthMiddleware} from "../middleware/auth.middleware";
import {IzadPanMapEntity} from "./entity/izad-pan-map.entity";
import {CustomersEntity} from "./entity/customers.entity";
import {Otp} from "../cp/enity/otp.entity";
import {AgrodealerAccountsEntity} from "../cp/enity/agrodealer-accounts.entity";
import {TransactionEntity} from "./entity/transaction.entity";
import {TransactionDetailsEntity} from "./entity/transaction_details.entity";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([ Otp, AgrodealerAccountsEntity, ProgramWalletsEntity, CustomersEntity, TransactionEntity, TransactionDetailsEntity]),
    TypeOrmModule.forFeature([  IzadPanMapEntity], 'KCEPPORTAL')],
  controllers: [FarmerController],
  providers: [FarmerService],
})
export class FarmersModule implements  NestModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(FarmerController);
  }
}
