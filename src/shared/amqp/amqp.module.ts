import { Module, Global } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { PubSub } from './amqp.service';
@Global()
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
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
  providers: [PubSub],
  exports: [PubSub],
})
export class CoopAMQPModule {}
