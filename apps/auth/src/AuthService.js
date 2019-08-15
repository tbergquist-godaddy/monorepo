// @flow

import { UserRepository } from '@tbergq/tvhelper-persistence';
import { verify } from 'password-hash';
import jwt from 'jsonwebtoken';

import { LoginReply, AuthenticateReply, User } from './__generated__/auth_pb';

const { JWT_SECRET } = process.env;

function getRepository(app: number) {
  switch (app) {
    case 0:
      return UserRepository;
    default:
      throw new Error('Unknown app');
  }
}

function signToken(user: {| +id: string, +username: string, +app: number |}) {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: '1y',
    issuer: 'tbergq-graphql.now.sh',
  });
}

export async function login(call: $FlowFixMe, callback: $FlowFixMe) {
  const request = call.request.toObject();
  const repository = getRepository(request.app);
  const user = await repository.findUser(request.username);

  const isCorrect = verify(request.password, user?.password);

  if (!isCorrect) {
    callback(null, new LoginReply(['Wrong username or password', '', false]));
    return;
  }
  const token = signToken({
    id: user.id,
    username: user.username,
    app: request.app,
  });

  callback(null, new LoginReply(['', token, true]));
}

export function authenticate(call: $FlowFixMe, callback: $FlowFixMe) {
  try {
    const request = call.request.toObject();
    jwt.verify(request.token, JWT_SECRET);

    const decoded = jwt.decode(request.token);
    const user = new User([decoded.id, decoded.username, decoded.app]);
    const reply = new AuthenticateReply();
    reply.setUser(user);
    callback(null, reply);
  } catch {
    // jwt.verify throws if token is invalid
    callback(null, new AuthenticateReply());
  }
}
