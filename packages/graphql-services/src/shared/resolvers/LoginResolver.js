// @flow

import { verify } from 'password-hash';
import { toGlobalId } from 'graphql-relay';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

import type { User } from '../../types/tvhelper/account/User';

export type Apps = 'tvhelper' | 'trainingjournal';

export type LoggedInUser = {|
  +id?: string,
  +username: string,
  +email?: string,
  +token?: string,
  +app: Apps,
|};

config();

const { JWT_SECRET } = process.env;

const signToken = (user: LoggedInUser) => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: '1y',
    issuer: 'tbergq-graphql.now.sh',
  });
};

const loginFailed = () => ({
  token: null,
  success: false,
});

const LoginResolver = (user: ?User, password: string, app: Apps) => {
  if (user == null) {
    return loginFailed();
  }
  const isCorrect = verify(password, user.password);
  if (!isCorrect) {
    return loginFailed();
  }
  const token = signToken({
    id: toGlobalId('User', user.id),
    username: user.username,
    app,
  });

  return { token, success: true };
};

export default LoginResolver;
