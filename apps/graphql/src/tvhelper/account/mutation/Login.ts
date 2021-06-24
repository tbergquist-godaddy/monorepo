import { GraphQLString, GraphQLNonNull } from 'graphql';
import { LoginType, LoginResolver } from '@tbergq/graphql-services';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import { loginResolver } from '../../../account';

type Args = {
  username: string;
  password: string;
};

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
