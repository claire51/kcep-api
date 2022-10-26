"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmersModule = void 0;
const common_1 = require("@nestjs/common");
const farmer_controller_1 = require("./farmer/farmer.controller");
const farmer_service_1 = require("./farmer/farmer.service");
const typeorm_1 = require("@nestjs/typeorm");
const program_wallets_entity_1 = require("./entity/program-wallets.entity");
const auth_middleware_1 = require("../middleware/auth.middleware");
const izad_pan_map_entity_1 = require("./entity/izad-pan-map.entity");
const customers_entity_1 = require("./entity/customers.entity");
const otp_entity_1 = require("../cp/enity/otp.entity");
const agrodealer_accounts_entity_1 = require("../cp/enity/agrodealer-accounts.entity");
const transaction_entity_1 = require("./entity/transaction.entity");
const transaction_details_entity_1 = require("./entity/transaction_details.entity");
let FarmersModule = class FarmersModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes(farmer_controller_1.FarmerController);
    }
};
FarmersModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([otp_entity_1.Otp, agrodealer_accounts_entity_1.AgrodealerAccountsEntity, program_wallets_entity_1.ProgramWalletsEntity, customers_entity_1.CustomersEntity, transaction_entity_1.TransactionEntity, transaction_details_entity_1.TransactionDetailsEntity]),
            typeorm_1.TypeOrmModule.forFeature([izad_pan_map_entity_1.IzadPanMapEntity], 'KCEPPORTAL')],
        controllers: [farmer_controller_1.FarmerController],
        providers: [farmer_service_1.FarmerService],
    })
], FarmersModule);
exports.FarmersModule = FarmersModule;
//# sourceMappingURL=farmers.module.js.map