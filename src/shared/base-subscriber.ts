import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';

export abstract class BaseSubscriber {
  pubsub: ClientProxy;
  constructor() {
  }
}
