import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
export declare class PubSub {
    private readonly amqp;
    constructor(amqp: AmqpConnection);
    publish(key: any, data: any): Promise<void>;
}
