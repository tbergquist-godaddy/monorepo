// @flow

import { commitMutation, graphql } from '@tbergq/relay';

import { type addExerciseMutationVariables } from './__generated__/addExerciseMutation.graphql';

const mutation = graphql`
  mutation addExerciseMutation($exercise: ExerciseInput!) {
    createExercise(exercise: $exercise) {
      exerciseEdge {
        node {
          id
          name
          set
          reps
          breakTime
          baseExercise {
            id
            name
          }
        }
      }
    }
  }
`;

export default function addExercise(
  environment: $FlowFixMe,
  variables: addExerciseMutationVariables,
  onCompleted: Function,
) {
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: variables.exercise.dayId,
        connectionInfo: [{ key: 'ExerciseTable_exercises', rangeBehavior: 'append' }],
        edgeName: 'exerciseEdge',
      },
    ],
  });
}
