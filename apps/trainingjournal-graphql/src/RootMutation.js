// @flow

import { GraphQLObjectType } from 'graphql';

import createUser from './account/mutations/CreateUser';
import login from './account/mutations/Login';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    createUser,
    login,
  },
}): GraphQLObjectType);
