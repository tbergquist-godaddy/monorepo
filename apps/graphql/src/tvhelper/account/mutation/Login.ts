import { GraphQLString, GraphQLNonNull } from 'graphql';
import { LoginType } from '@tbergq/graphql-services';

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
