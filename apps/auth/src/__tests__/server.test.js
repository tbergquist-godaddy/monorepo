// @flow

import grpc from 'grpc';
import mockingoose from 'mockingoose';
import { UserModel } from '@tbergq/tvhelper-persistence';
import { verify, decode } from 'jsonwebtoken';
import { withMongoDb } from '@tbergq/test-utils';

import server from '../server';
import { LoginRequest, AuthenticateRequest } from '../__generated__/auth_pb';
import { AuthClient } from '../__generated__/auth_grpc_pb';

let port;
let client;

withMongoDb();
jest.mock('password-hash', () => ({ verify: () => true }));
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'token'),
  verify: jest.fn(),
  decode: jest.fn(),
}));

const user = {
  _id: '507f191e810c19729de860ea',
  username: 'tito',
  email: 'tito@bonito.com',
  password: 'password',
};

describe('AuthService', () => {
  beforeAll(done => {
    port = server.bind('0.0.0.0:0', grpc.ServerCredentials.createInsecure());

    client = new AuthClient(`localhost:${port}`, grpc.credentials.createInsecure());

    server.start();
    done();
  });

  afterAll(() => {
    server.forceShutdown();
  });

  it('Logs user in', done => {
    const request = new LoginRequest(['Tito', 'Bonito', 0]);

    mockingoose(UserModel).toReturn(user, 'findOne');
    client.login(request, (err, res) => {
      if (err) {
        throw err;
      }

      const response = res.toObject();

      expect(response).toEqual({
        message: '',
        token: 'token',
        success: true,
      });
      done();
    });
  });

  it('authenticates token', done => {
    const request = new AuthenticateRequest(['valid token']);
    mockingoose(UserModel).toReturn(user, 'findOne');

    verify.mockReturnValueOnce(true);
    decode.mockReturnValueOnce({
      id: user._id,
      username: user.username,
      app: 0,
    });

    client.authenticate(request, (err, res) => {
      if (err) {
        throw err;
      }
      const response = res.toObject();

      expect(response).toEqual({
        user: {
          id: user._id,
          username: user.username,
          app: 0,
        },
      });
      done();
    });
  });

  it('returns undefined for invalid tokens', done => {
    const request = new AuthenticateRequest(['invalid token']);

    verify.mockImplementationOnce(() => {
      throw new Error('invalid token');
    });

    client.authenticate(request, (err, res) => {
      if (err) {
        throw err;
      }
      const response = res.toObject();

      expect(response).toEqual({
        user: undefined,
      });
      done();
    });
  });
});
