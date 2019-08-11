// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');

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


// The greeting service definition.
var AuthService = exports.AuthService = {
  // Sends a greeting
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
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
