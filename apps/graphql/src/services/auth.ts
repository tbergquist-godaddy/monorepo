import type { Request, Response } from 'express';
import 'express';
import passport from 'passport';
import { UserRepository } from '@tbergq/tvhelper-persistence';

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

const getFindUserFunction = (app: Apps | null | undefined) => {
  switch (app) {
    case 'tvhelper':
      return UserRepository.findUser;

    default:
      throw new Error('Unkown app type.');
  }
};

export const tokenToUser = async (jwtPayload: JwtPayload, done: any) => {
  const findUserFunction = getFindUserFunction(jwtPayload.app);
  const user = await findUserFunction(jwtPayload.username);

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
