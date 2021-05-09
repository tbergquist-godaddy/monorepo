// @flow

import { type $Request, type $Response } from 'express';
import passport from 'passport';
import { UserRepository } from '@tbergq/tvhelper-persistence';
import type { Apps } from '@tbergq/graphql-services';

type JwtPayload = {
  +iss: string,
  +username: string,
  +token?: string,
  +app?: Apps,
};

export const jwtFromRequest = (request: $Request): void | string => {
  return request.get('Authorization');
};

const getFindUserFunction = (app: ?Apps) => {
  switch (app) {
    case 'tvhelper':
      return UserRepository.findUser;
    default:
      throw new Error('Unkown app type.');
  }
};

export const tokenToUser = async (jwtPayload: JwtPayload, done: $FlowFixMe) => {
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

export const attachUserToRequest = (req: $Request, res: $Response, next: $FlowFixMe) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (user) {
      req.user = user;
    } else if (err) {
      req.user = null;
    }

    next();
  })(req, res, next);
};
