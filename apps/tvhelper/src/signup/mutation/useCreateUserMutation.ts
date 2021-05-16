import { useMutation, graphql } from 'react-relay';
import type { useCreateUserMutation as MutationType } from '__generated__/useCreateUserMutation.graphql';

const mutation = graphql`
  mutation useCreateUserMutation($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      success
    }
  }
`;

export default function useCreateUserMuatation() {
  return useMutation<MutationType>(mutation);
}
