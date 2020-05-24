// @flow strict-local

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';

const User: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'The user object',
  fields: {
    id: GlobalID(({ email }) => email),
    email: {
      type: GraphQLString,
    },
  },
});

export default User;
