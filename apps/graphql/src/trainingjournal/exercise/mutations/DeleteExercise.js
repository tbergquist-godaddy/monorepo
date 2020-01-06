// @flow

import { GraphQLNonNull, GraphQLID } from 'graphql';
import { ExerciseRepository } from '@tbergq/trainingjournal-persistence';
import { fromGlobalId } from '@adeira/graphql-global-id';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import DeletedExercise from '../types/output/DeletedExercise';

type Args = {
  +id: string,
  ...
};

export default {
  description: 'Delete an Exercise',
  type: DeletedExercise,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: mixed, { id }: Args, { user }: GraphqlContextType) => {
    const userId = user?.id;
    if (userId == null) {
      return null;
    }
    const exerciseId = fromGlobalId(id);
    const isDeleted = await ExerciseRepository.deleteExercise(userId, exerciseId);

    return {
      success: isDeleted,
      exerciseId: isDeleted ? id : null,
    };
  },
};
