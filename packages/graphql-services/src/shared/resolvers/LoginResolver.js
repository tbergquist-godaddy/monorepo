// @flow

import { verify } from 'password-hash';
import { toGlobalId } from '@adeira/graphql-relay';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

export type Apps = 'tvhelper';

type User = {
  +id: string,
  +username: string,
  +password: string,
};

export type LoggedInUser = {
  +id?: string,
  +username: string,
  +email?: string,
  +token?: string,
  +app: Apps,
};

config();

const { JWT_SECRET } = process.env;

export const signToken = (user: LoggedInUser): string => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: '1y',
    issuer: 'tbergq-graphql.now.sh',
  });
};

const loginFailed = () => ({
  token: null,
  success: false,
});

const LoginResolver = (
  user: ?User,
  password: string,
  app: Apps,
): { +token: ?string, +success: boolean } => {
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
