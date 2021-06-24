import { GraphQLString, GraphQLNonNull } from 'graphql';
import { createUserResolver } from 'account';

import CreateUserType from '../types/output/CreateUserType';

export default {
  type: CreateUserType,
  args: {
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: createUserResolver,
};
