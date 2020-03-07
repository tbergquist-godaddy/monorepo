// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { UserRepository } from '@tbergq/tvhelper-persistence';

import ChangePasswordOrError, { PasswordError } from '../types/output/ChangePasswordOrError';

type Args = {
  +username: string,
  +password: string,
  +newPassword: string,
  ...
};

export default {
  type: ChangePasswordOrError,
  args: {
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
    newPassword: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_: mixed, { username, password, newPassword }: Args) => {
    try {
      await UserRepository.changePassword(username, password, newPassword);
      return { success: true };
    } catch (e) {
      return new PasswordError(e.message, true);
    }
  },
};
