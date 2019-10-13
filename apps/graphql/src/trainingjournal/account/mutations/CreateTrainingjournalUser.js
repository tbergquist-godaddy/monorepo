// @flow strict

import { GraphQLNonNull, GraphQLString } from 'graphql';
import { fetch } from '@tbergq/graphql-services';

import CreateTrainingJournalUser from '../types/output/CreateTrainingjournalUser';

type Args = {|
  +username: string,
  +password: string,
  +email: string,
|};

export default {
  name: 'CreateTraningJournalUser',
  type: CreateTrainingJournalUser,
  description: 'Create a user for trainingjournal application',
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
    const user = await fetch('https://trainingjournal-auth.now.sh/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });

    return user;
  },
};
