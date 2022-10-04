import { OnApplicationBootstrap } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
export declare class PubsubModule implements OnApplicationBootstrap {
    private readonly client;
    onApplicationBootstrap(): void;
    constructor(client: ClientProxy);
}
