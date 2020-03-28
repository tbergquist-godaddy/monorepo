// @flow

import { GraphQLNonNull, GraphQLInputObjectType } from 'graphql';
import { ExerciseRepository, Exercise } from '@tbergq/trainingjournal-persistence';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import CreateExerciseOutput from '../types/output/CreateExercise';
import CreateExerciseInput, {
  type CreateExerciseType as CreateExerciseInputArgs,
} from '../types/input/CreateExerciseInput';

type Args = {
  +exercise: CreateExerciseInputArgs,
  ...
};

export default {
  description: 'Create a new Exercise',
  type: CreateExerciseOutput,
  args: {
    exercise: {
      type: (GraphQLNonNull(CreateExerciseInput): GraphQLNonNull<GraphQLInputObjectType>),
    },
  },
  resolve: async (
    _: mixed,
    { exercise }: Args,
    { user }: GraphqlContextType,
  ): Promise<null | { exerciseEdge: { node: Exercise } }> => {
    const userId = user?.id;
    if (userId == null) {
      return null;
    }

    return {
      exerciseEdge: {
        node: await ExerciseRepository.createExercise({
          ...exercise,
          user: userId,
        }),
      },
    };
  },
};
