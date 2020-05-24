// @flow strict

import { GraphQLObjectType, GraphQLString } from 'graphql';

import ErrorInterface from './interface/Error';

export default (new GraphQLObjectType({
  name: 'GeneralError',
  description: 'General error message type',
  interfaces: [ErrorInterface],
  fields: {
    message: {
      type: GraphQLString,
      resolve: parent => {
        return parent.message;
      },
    },
  },
}): GraphQLObjectType);
