// @flow

import grpc from 'grpc';

import { AuthService } from './__generated__/auth_grpc_pb';
import { login, authenticate } from './AuthService';

const server = new grpc.Server();
server.bind('localhost:30051', grpc.ServerCredentials.createInsecure());

server.addService(AuthService, {
  login,
  authenticate,
});

export default server;
