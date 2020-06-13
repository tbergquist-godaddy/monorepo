// @flow

import { GraphQLObjectType } from 'graphql';

import createUser from './account/mutations/CreateUser';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    createUser,
  },
}): GraphQLObjectType);
