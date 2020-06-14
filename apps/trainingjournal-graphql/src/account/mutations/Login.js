// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { LoginType } from '@tbergq/graphql-services';
import { UserRepository } from '@tbergq/trainingjournal-persistence';
import jwt from 'jsonwebtoken';
import { toGlobalId } from '@adeira/graphql-relay';

const { JWT_SECRET } = process.env;

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
  resolve: async (_: mixed, args: Args): Promise<{ +success: boolean, +token: ?string }> => {
    const user = await UserRepository.verifyPassword(args.username, args.password);
    if (user == null || user.id == null) {
      return { success: false, token: null };
    }
    const { id, username, email } = user;
    const globalId = toGlobalId('User', id.toString());
    const token = jwt.sign({ id: globalId, username, email }, JWT_SECRET, {
      expiresIn: '1y',
      issuer: 'tbergq-trainingjournal.herokuapp.com',
    });

    return { token, success: true };
  },
};
