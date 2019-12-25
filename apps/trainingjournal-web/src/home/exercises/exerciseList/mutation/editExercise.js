// @flow

import { graphql, commitMutation, type RelayEnvironmentType } from '@tbergq/relay';

import type {
  editExerciseMutation,
  CreateExerciseInput,
} from './__generated__/editExerciseMutation.graphql';

const mutation = graphql`
  mutation editExerciseMutation($id: ID!, $exercise: CreateExerciseInput!) {
    editExercise(exerciseId: $id, exercise: $exercise) {
      exerciseEdge {
        node {
          ...EditExercise_exercise
        }
      }
    }
  }
`;

export default function editExercise(
  environment: RelayEnvironmentType,
  input: CreateExerciseInput,
  exerciseId: string,
  onCompleted: () => void,
) {
  commitMutation<editExerciseMutation>(environment, {
    mutation,
    variables: { id: exerciseId, exercise: input },
    onCompleted,
    optimisticResponse: {
      editExercise: {
        exerciseEdge: {
          node: {
            id: exerciseId,
            ...input,
          },
        },
      },
    },
  });
}
