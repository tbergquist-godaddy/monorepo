// @flow

import { GraphQLNonNull } from 'graphql';
import { ExerciseRepository } from '@tbergq/trainingjournal-persistence';

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
  name: 'CreateExercise',
  description: 'Create a new Exercise',
  type: CreateExerciseOutput,
  args: {
    exercise: {
      type: GraphQLNonNull(CreateExerciseInput),
    },
  },
  resolve: async (_: mixed, { exercise }: Args, { user }: GraphqlContextType) => {
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
