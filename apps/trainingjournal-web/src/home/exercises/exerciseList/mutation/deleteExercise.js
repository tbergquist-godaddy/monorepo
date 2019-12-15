// @flow

import { graphql, commitMutation, type RelayEnvironmentType } from '@tbergq/relay';

import type { deleteExerciseMutation } from './__generated__/deleteExerciseMutation.graphql';

const mutation = graphql`
  mutation deleteExerciseMutation($id: ID!) {
    deleteExercise(id: $id) {
      success
      exerciseId
    }
  }
`;

export default function deleteExercise(
  environment: RelayEnvironmentType,
  exerciseId: string,
  userId: string,
) {
  commitMutation<deleteExerciseMutation>(environment, {
    mutation,
    variables: { id: exerciseId },
    optimisticResponse: {
      deleteExercise: {
        success: true,
        exerciseId,
      },
    },
    configs: [
      {
        type: 'RANGE_DELETE',
        parentID: userId,
        connectionKeys: [
          {
            key: 'ExerciseList_exercises',
          },
        ],
        pathToConnection: ['viewer', 'exercises'],
        deletedIDFieldName: 'exerciseId',
      },
    ],
  });
}
