// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { UserRepository } from '@tbergq/tvhelper-persistence';

import ChangePasswordOrError, { PasswordError } from '../types/output/ChangePasswordOrError';
import type { GraphqlContextType } from '../../../services/createGraphqlContext';

type Args = {
  +password: string,
  +newPassword: string,
  ...
};

export default {
  type: ChangePasswordOrError,
  args: {
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
    newPassword: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_: mixed, { password, newPassword }: Args, { user }: GraphqlContextType) => {
    try {
      const userId = user?.id;
      if (userId == null) {
        return new PasswordError('You must be logged in to change password', false);
      }
      await UserRepository.changePassword(userId, password, newPassword);
      return { success: true };
    } catch (e) {
      return new PasswordError(e.message, true);
    }
  },
};
