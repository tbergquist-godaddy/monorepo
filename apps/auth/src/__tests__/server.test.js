// @flow

import grpc from 'grpc';

import server from '../server';
import { LoginRequest } from '../__generated__/auth_pb';
import { AuthClient } from '../__generated__/auth_grpc_pb';

let port;
let client;

describe('createOBSCacheService', () => {
  beforeEach(done => {
    port = server.bind('0.0.0.0:0', grpc.ServerCredentials.createInsecure());

    client = new AuthClient(`localhost:${port}`, grpc.credentials.createInsecure());

    server.start();
    done();
  });

  afterEach(() => {
    server.forceShutdown();
  });

  it('Replies to greeting', done => {
    const request = new LoginRequest(['Tito', 'Bonito', 0]);

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
