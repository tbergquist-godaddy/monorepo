// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { connectionArgs, cursorToOffset } from 'graphql-relay';
import { type ConnectionArguments } from '@tbergq/graphql-services';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import ExerciseConnection from '../../exercise/types/output/ExerciseConnection';
import ProgramsConnection from '../../programs/types/output/ProgramConnection';
import toConnection from '../../../services/toConnection';

const getUserAndOffset = (
  args: ConnectionArguments,
  user: $PropertyType<GraphqlContextType, 'user'>,
) => {
  return {
    userId: user?.id,
    offset: args.after != null ? cursorToOffset(args.after) + 1 : 0,
  };
};

export default (new GraphQLObjectType({
  name: 'TraningJournalViewer',
  description: 'The viewer object for the current logged in user in TrainingJournal app',
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
        const { userId, offset } = getUserAndOffset(args, user);

        if (userId == null) {
          return null;
        }

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
    programs: {
      type: ProgramsConnection,
      args: connectionArgs,
      resolve: async (
        _: mixed,
        args: ConnectionArguments,
        { user, dataLoader }: GraphqlContextType,
      ) => {
        const { userId, offset } = getUserAndOffset(args, user);

        if (userId == null) {
          return null;
        }
        const { programs, count } = await dataLoader.trainingjournal.programs.load({
          userId,
          limit: args.first ?? 20,
          skip: offset,
        });
        return toConnection(programs, { offset, count });
      },
    },
  },
}): GraphQLObjectType);
