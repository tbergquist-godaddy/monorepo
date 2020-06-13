// @flow strict-local

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'User object',
  fields: {
    id: GlobalID(({ id }) => id),
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
  },
});

export default UserType;
