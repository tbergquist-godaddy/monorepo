// @flow

import grpc from 'grpc';
import mockingoose from 'mockingoose';
import { UserModel } from '@tbergq/tvhelper-persistence';

import server from '../server';
import { LoginRequest } from '../__generated__/auth_pb';
import { AuthClient } from '../__generated__/auth_grpc_pb';

let port;
let client;

jest.mock('password-hash', () => ({ verify: () => true }));
jest.mock('jsonwebtoken', () => ({ sign: () => 'token' }));

describe('AuthService', () => {
  beforeEach(done => {
    port = server.bind('0.0.0.0:0', grpc.ServerCredentials.createInsecure());

    client = new AuthClient(`localhost:${port}`, grpc.credentials.createInsecure());

    server.start();
    done();
  });

  afterEach(() => {
    server.forceShutdown();
  });

  it('Logs user in', done => {
    const request = new LoginRequest(['Tito', 'Bonito', 0]);

    const user = {
      _id: '507f191e810c19729de860ea',
      username: 'tito',
      email: 'tito@bonito.com',
      password: 'password',
    };

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
});
