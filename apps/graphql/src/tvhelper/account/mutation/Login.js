// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { LoginType, LoginResolver } from '@tbergq/graphql-services';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';

type Args = {
  +username: string,
  +password: string,
  ...
};

export default {
  type: LoginType,
  args: {
    username: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
    password: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
  },
  resolve: async (
    _: mixed,
    { username, password }: Args,
    { dataLoader }: GraphqlContextType,
  ): Promise<{ +success: boolean, +token: ?string }> => {
    const user = await dataLoader.tvhelper.user.load(username);

    return LoginResolver(user, password, 'tvhelper');
  },
};
