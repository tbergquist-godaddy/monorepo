// @flow

import { GraphQLNonNull, GraphQLString, GraphQLScalarType } from 'graphql';
import { UserRepository } from '@tbergq/trainingjournal-persistence';
import { LoginType, signToken } from '@tbergq/graphql-services';

type Args = {
  +username: string,
  +password: string,
  ...
};

export default {
  type: LoginType,
  description: 'Login to trainingjournal application',
  args: {
    username: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<GraphQLScalarType>),
    },
    password: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<GraphQLScalarType>),
    },
  },
  resolve: async (
    _: mixed,
    { username, password }: Args,
  ): Promise<{ +success: boolean, +token: ?string }> => {
    // $FlowFixMe (>=<0.111.1)
    const user = await UserRepository.verifyPassword(username, password);

    if (user === null) {
      return { token: null, success: false };
    }

    return {
      token: signToken({
        ...user,
        app: 'trainingjournal',
      }),
      success: true,
    };
  },
};
