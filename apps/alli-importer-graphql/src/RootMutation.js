// @flow strict-local

import { GraphQLObjectType } from 'graphql';

import createUser from './account/mutations/createUser';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    createUser,
  },
}): GraphQLObjectType);
