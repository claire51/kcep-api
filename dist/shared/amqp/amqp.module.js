"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoopAMQPModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_rabbitmq_1 = require("@golevelup/nestjs-rabbitmq");
const amqp_service_1 = require("./amqp.service");
let CoopAMQPModule = class CoopAMQPModule {
};
CoopAMQPModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            nestjs_rabbitmq_1.RabbitMQModule.forRoot(nestjs_rabbitmq_1.RabbitMQModule, {
                exchanges: [
                    {
                        name: 'pubsub',
                        type: 'topic',
                    },
                ],
                uri: `amqp://guest:guest@rabbit:5672/`,
                connectionInitOptions: { timeout: 40000 },
            }),
        ],
        providers: [amqp_service_1.PubSub],
        exports: [amqp_service_1.PubSub],
    })
], CoopAMQPModule);
exports.CoopAMQPModule = CoopAMQPModule;
//# sourceMappingURL=amqp.module.js.map