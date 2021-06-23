import type { Request, Response } from 'express';
import 'express';
import passport from 'passport';

import { UserService } from '../account';
type Apps = any;

type JwtPayload = {
  readonly iss: string;
  readonly username: string;
  readonly token?: string;
  readonly app?: Apps;
};
export const jwtFromRequest = (request: Request): void | string => {
  return request.get('Authorization');
};

export const tokenToUser = async (jwtPayload: JwtPayload, done: any) => {
  const userService = new UserService();
  const user = await userService.getByUserName(jwtPayload.username);

  if (user != null) {
    done(null, {
      id: user.id,
      username: user.username,
      email: user.email,
      app: jwtPayload.app,
    });
  } else {
    done(null, null);
  }
};
export const attachUserToRequest = (req: Request, res: Response, next: any) => {
  passport.authenticate(
    'jwt',
    {
      session: false,
    },
    (err, user) => {
      if (user) {
        req.user = user;
      } else if (err) {
        // @ts-ignore: This is ok
        req.user = null;
      }

      next();
    },
  )(req, res, next);
};
