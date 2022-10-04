import { Module, Global, OnApplicationBootstrap, Inject } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy } from '@nestjs/microservices';
import { RedisConnectionOptions } from 'src/config/rmq.config';

@Global()
@Module({
  providers: [
    {
      provide: 'PUBLISH_SERVICE',
      useFactory: () => ClientProxyFactory.create(RedisConnectionOptions),
    },
  ],
  exports: ['PUBLISH_SERVICE'],
})
export class PubsubModule implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    this.client.connect();
  }

  constructor(
    @Inject('PUBLISH_SERVICE') private readonly client: ClientProxy,
  ) {}
}
