"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubsubModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rmq_config_1 = require("../../config/rmq.config");
let PubsubModule = class PubsubModule {
    constructor(client) {
        this.client = client;
    }
    onApplicationBootstrap() {
        this.client.connect();
    }
};
PubsubModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [
            {
                provide: 'PUBLISH_SERVICE',
                useFactory: () => microservices_1.ClientProxyFactory.create(rmq_config_1.RedisConnectionOptions),
            },
        ],
        exports: ['PUBLISH_SERVICE'],
    }),
    __param(0, common_1.Inject('PUBLISH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], PubsubModule);
exports.PubsubModule = PubsubModule;
//# sourceMappingURL=pubsub.module.js.map