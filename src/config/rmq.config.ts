import { Transport, ClientOptions } from '@nestjs/microservices';
export const RedisConnectionOptions: ClientOptions = {
  transport: Transport.REDIS,
  options: {
    url: `redis://redis:6379`,
  },
};
