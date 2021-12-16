import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import { jwtSecret } from 'src/environment';

@Injectable()
export class AuthService {
  signToken(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      token: jwt.sign(payload, jwtSecret, { expiresIn: '1d' }),
    };
  }

  verifyToken(token: string) {
    try {
      jwt.verify(token, jwtSecret);
      return jwt.decode(token);
    } catch {
      return null;
    }
  }
}
