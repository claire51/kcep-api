import { ClientProxy } from '@nestjs/microservices';
export declare abstract class BaseSubscriber {
    pubsub: ClientProxy;
    constructor();
}
