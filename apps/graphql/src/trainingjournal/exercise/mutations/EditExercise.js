// @flow

import { GraphQLNonNull, GraphQLID, GraphQLScalarType, GraphQLInputObjectType } from 'graphql';
import { ExerciseRepository, Exercise as ExerciseType } from '@tbergq/trainingjournal-persistence';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { type OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import CreateExerciseOutput from '../types/output/CreateExercise';
import CreateExerciseInput, {
  type CreateExerciseType as CreateExerciseInputArgs,
} from '../types/input/CreateExerciseInput';

type Args = {
  +exercise: CreateExerciseInputArgs,
  +exerciseId: OpaqueIDString,
  ...
};

export default {
  description: 'Edits an Exercise',
  type: CreateExerciseOutput,
  args: {
    exerciseId: {
      type: (GraphQLNonNull(GraphQLID): GraphQLNonNull<GraphQLScalarType>),
    },
    exercise: {
      type: (GraphQLNonNull(CreateExerciseInput): GraphQLNonNull<GraphQLInputObjectType>),
    },
  },
  resolve: async (
    _: mixed,
    { exercise, exerciseId }: Args,
    { user }: GraphqlContextType,
  ): Promise<null | { +exerciseEdge: { +node: null | ExerciseType } }> => {
    const userId = user?.id;
    if (userId == null) {
      return null;
    }
    const node = await ExerciseRepository.editExercise(userId, fromGlobalId(exerciseId), {
      ...exercise,
      user: userId,
    });
    return {
      exerciseEdge: {
        node,
      },
    };
  },
};
