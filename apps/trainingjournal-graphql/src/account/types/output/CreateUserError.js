// @flow strict

import { GraphQLObjectType, GraphQLString, GraphQLEnumType } from 'graphql';

const CreateUserErrorReason = new GraphQLEnumType({
  name: 'CreateUserErrorReason',
  values: {
    EMAIL_EXISTS: { value: 'EMAIL_EXISTS' },
    USERNAME_EXISTS: { value: 'USERNAME_EXISTS' },
    UNKNOWN_ERROR: { value: 'UNKNOWN_ERROR' },
  },
});

const CreateUserError: GraphQLObjectType = new GraphQLObjectType({
  name: 'CreateUserError',
  description: 'Type indicating an error creating a user',
  fields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => {
        return message;
      },
    },
    reason: {
      type: CreateUserErrorReason,
      resolve: ({ message }) => {
        switch (message) {
          case 'users.username must be unique':
            return 'USERNAME_EXISTS';
          case 'users.email must be unique':
            return 'EMAIL_EXISTS';
          default:
            return 'UNKNOWN_ERROR';
        }
      },
    },
  },
});

export default CreateUserError;
