// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');

function serialize_auth_v1_AuthenticateReply(arg) {
  if (!(arg instanceof auth_pb.AuthenticateReply)) {
    throw new Error('Expected argument of type auth.v1.AuthenticateReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_AuthenticateReply(buffer_arg) {
  return auth_pb.AuthenticateReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_v1_AuthenticateRequest(arg) {
  if (!(arg instanceof auth_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type auth.v1.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_AuthenticateRequest(buffer_arg) {
  return auth_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_v1_LoginReply(arg) {
  if (!(arg instanceof auth_pb.LoginReply)) {
    throw new Error('Expected argument of type auth.v1.LoginReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_LoginReply(buffer_arg) {
  return auth_pb.LoginReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_v1_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.v1.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The auth service definition.
var AuthService = exports.AuthService = {
  // Logs a user in
  login: {
    path: '/auth.v1.Auth/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.LoginReply,
    requestSerialize: serialize_auth_v1_LoginRequest,
    requestDeserialize: deserialize_auth_v1_LoginRequest,
    responseSerialize: serialize_auth_v1_LoginReply,
    responseDeserialize: deserialize_auth_v1_LoginReply,
  },
  authenticate: {
    path: '/auth.v1.Auth/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AuthenticateRequest,
    responseType: auth_pb.AuthenticateReply,
    requestSerialize: serialize_auth_v1_AuthenticateRequest,
    requestDeserialize: deserialize_auth_v1_AuthenticateRequest,
    responseSerialize: serialize_auth_v1_AuthenticateReply,
    responseDeserialize: deserialize_auth_v1_AuthenticateReply,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
