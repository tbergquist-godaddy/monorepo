// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { connectionArgs, type ConnectionArguments, cursorToOffset } from 'graphql-relay';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import ExerciseConnection from '../../exercise/types/output/ExerciseConnection';
import toConnection from '../../../services/toConnection';

export default new GraphQLObjectType({
  name: 'TraningJournalViewer',
  isTypeOf: value => value === 'trainingjournal',
  fields: {
    id: GlobalID((_: mixed, { user }: GraphqlContextType) => user?.id ?? ''),
    username: {
      type: GraphQLString,
      resolve: (_: mixed, __: mixed, { user }: GraphqlContextType) => {
        return user?.username;
      },
    },

    exercises: {
      type: ExerciseConnection,
      args: connectionArgs,
      resolve: async (
        _: mixed,
        args: ConnectionArguments,
        { user, dataLoader }: GraphqlContextType,
      ) => {
        const userId = user?.id;
        if (userId == null) {
          return null;
        }
        const offset = args.after != null ? cursorToOffset(args.after) + 1 : 0;
        const { exercises, count } = await dataLoader.trainingjournal.exercises.load({
          userId,
          limit: args.first ?? 20,
          skip: offset,
        });

        return toConnection(exercises, {
          offset,
          count,
        });
      },
    },
  },
});
