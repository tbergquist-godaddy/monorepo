// @flow

import grpc from 'grpc';

import services from './__generated__/auth_grpc_pb';
import { sayHello } from './AuthService';

const server = new grpc.Server();
server.bind('localhost:30051', grpc.ServerCredentials.createInsecure());

server.addService(services.GreeterService, {
  sayHello,
});

export default server;
