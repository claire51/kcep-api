import { PubSub } from "./shared/amqp/amqp.service";
export declare class AppService {
    private readonly pubsub;
    constructor(pubsub: PubSub);
    ping(): Promise<string>;
    uuid(): string;
}
