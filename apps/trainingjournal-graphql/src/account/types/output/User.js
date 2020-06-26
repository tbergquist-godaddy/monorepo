// @flow strict-local

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { type ConnectionArguments, connectionFromArray } from '@adeira/graphql-relay';

import { ExerciseConnection } from '../../../exercises/types/output/Exercise';
import type { GraphqlContextType } from '../../../createContext';

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'User object',
  fields: {
    id: GlobalID(({ id }) => id),
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },

    exercises: {
      type: ExerciseConnection,
      resolve: async (
        _: mixed,
        args: ConnectionArguments,
        { user, dataloader }: GraphqlContextType,
      ) => {
        const userId = user?.id ?? Number.MIN_SAFE_INTEGER;
        const exercises = await dataloader.exercises.load(userId);
        return connectionFromArray(exercises, args);
      },
    },
  },
});

export default UserType;
