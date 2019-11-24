// @flow

import { GraphQLNonNull } from 'graphql';
import { ExerciseRepository } from '@tbergq/trainingjournal-persistence';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import { ExerciseEdge } from '../types/output/ExerciseConnection';
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
  type: ExerciseEdge,
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
      node: await ExerciseRepository.createExercise({
        ...exercise,
        user: userId,
      }),
    };
  },
};
