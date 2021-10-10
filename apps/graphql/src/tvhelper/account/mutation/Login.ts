import { GraphQLString, GraphQLNonNull } from 'graphql';
import LoginType from 'application/models/login-type';

import { loginResolver } from '../../../account';

export default {
  type: LoginType,
  args: {
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: loginResolver,
};
