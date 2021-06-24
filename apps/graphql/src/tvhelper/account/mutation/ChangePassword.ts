import { GraphQLString, GraphQLNonNull } from 'graphql';
import { changePasswordResolver } from 'account';

import ChangePasswordOrError from '../types/output/ChangePasswordOrError';

const ChangePassword = {
  type: ChangePasswordOrError,
  args: {
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
    newPassword: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: changePasswordResolver,
};

export default ChangePassword;
