import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { AuthService } from './auth-service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const token = (req.headers.authorization ?? '').split(' ')[1];
    const payload = this.authService.verifyToken(token);

    if (payload == null || typeof payload === 'string') {
      req.user = undefined;
    } else {
      const { email, sub } = payload;
      req.user = {
        email,
        id: sub ?? '',
      };
    }

    next();
  }
}
