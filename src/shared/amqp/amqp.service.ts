import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';


@Injectable()
export class PubSub {
  constructor(private readonly amqp: AmqpConnection) {}
  async publish(key, data) {
    return await this.amqp.publish('pubsub', key, data);
  }
}
