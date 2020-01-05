// @flow

import { commitMutation, graphql, type RelayEnvironmentType as Environment } from '@tbergq/relay';

import type {
  createProgramMutation,
  createProgramMutationVariables,
} from './__generated__/createProgramMutation.graphql';

const mutation = graphql`
  mutation createProgramMutation($program: CreateProgramInput!) {
    createProgram(program: $program) {
      programEdge {
        node {
          ...ProgramListItem_program
        }
      }
    }
  }
`;

export default function createProgram(
  environment: Environment,
  variables: createProgramMutationVariables,
  userId: string,
  onCompleted: () => void,
) {
  commitMutation<createProgramMutation>(environment, {
    mutation,
    variables,
    onCompleted,
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: userId,
        edgeName: 'programEdge',
        connectionInfo: [
          {
            key: 'ProgramList_programs',
            rangeBehavior: 'append',
          },
        ],
      },
    ],
  });
}
