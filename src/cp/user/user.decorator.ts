import { createParamDecorator, Logger } from '@nestjs/common';
export const UserAuth = createParamDecorator((data, req) => {
  return data ? req.user[data] : req.user;
});
