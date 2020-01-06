// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { UserRepository } from '@tbergq/tvhelper-persistence';

import CreateUserType from '../types/output/CreateUserType';

type Args = {
  +username: string,
  +password: string,
  +email: string,
  ...
};

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
  resolve: async (_: mixed, { username, password, email }: Args) => {
    const user = await UserRepository.createUser({
      username,
      password,
      email,
    });

    return { success: user != null };
  },
};
