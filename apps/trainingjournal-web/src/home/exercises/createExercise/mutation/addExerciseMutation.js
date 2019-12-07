// @flow

import { graphql, commitMutation, type RelayEnvironmentType } from '@tbergq/relay';

import type {
  addExerciseMutation,
  addExerciseMutationVariables,
} from './__generated__/addExerciseMutation.graphql';

const mutation = graphql`
  mutation addExerciseMutation($input: CreateExerciseInput!) {
    createExercise(exercise: $input) {
      exerciseEdge {
        node {
          id
          name
          videoUrl
          description
          muscleGroups
        }
      }
    }
  }
`;

export default function addExercise(
  environment: RelayEnvironmentType,
  variables: addExerciseMutationVariables,
  userId: string,
  onCompleted: ?() => void,
) {
  commitMutation<addExerciseMutation>(environment, {
    mutation,
    variables,
    onCompleted,
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: userId,
        edgeName: 'exerciseEdge',
        connectionInfo: [
          {
            key: 'ExerciseList_exercises',
            rangeBehavior: 'append',
          },
        ],
      },
    ],
  });
}
