// @flow

import { GraphQLNonNull, GraphQLString, GraphQLScalarType } from 'graphql';
import { UserRepository, User } from '@tbergq/trainingjournal-persistence';

import CreateTrainingJournalUser from '../types/output/CreateTrainingjournalUser';

type Args = {
  +username: string,
  +password: string,
  +email: string,
  ...
};

export default {
  type: CreateTrainingJournalUser,
  description: 'Create a user for trainingjournal application',
  args: {
    username: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<GraphQLScalarType>),
    },
    password: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<GraphQLScalarType>),
    },
    email: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<GraphQLScalarType>),
    },
  },
  resolve: async (_: mixed, { username, password, email }: Args): Promise<User> => {
    const user = await UserRepository.createUser({ username, password, email });

    return user;
  },
};
