import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Response } from 'express';
import { UserService } from 'src/cp/user/user.service';
import {configCredentials} from "../config/services_constants";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req, res: Response, next: Function) {
    req.user = await this.validateToken(req.headers.authorization);
    next();
  }

  async validateToken(auth: string) {
    if (!auth || auth.split(' ')[0] !== 'Bearer') {
      return null;
    }

    const token = auth.split(' ')[1];

    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      try {
        const user = await this.userService.getUser(
          decoded.UserID,
        );
        if (!user) {
          return null;
        }
        return user;
      } catch (e) {
        return null;
      }
    } catch (err) {
      return null;
    }
  }
}
