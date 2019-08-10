// @flow

import grpc from 'grpc';

import server from '../server';
import { HelloRequest } from '../__generated__/auth_pb';
import services from '../__generated__/auth_grpc_pb';

let port;
let client;

describe('createOBSCacheService', () => {
  beforeEach(done => {
    port = server.bind('0.0.0.0:0', grpc.ServerCredentials.createInsecure());

    client = new services.GreeterClient(`localhost:${port}`, grpc.credentials.createInsecure());

    server.start();
    done();
  });

  afterEach(() => {
    server.forceShutdown();
  });

  it('Replies to greeting', done => {
    const request = new HelloRequest(['Tito Bonito']);

    client.sayHello(request, (err, res) => {
      if (err) {
        throw err;
      }

      const response = res.toObject();

      expect(response.message).toEqual('Hello Tito Bonito');
      done();
    });
  });
});
