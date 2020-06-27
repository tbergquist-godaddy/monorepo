// @flow strict-local

import * as React from 'react';
import { SignupForm as Signup, useShowToast } from '@tbergq/components';
import { useMutation, graphql } from '@tbergq/relay';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Wrapper } from './LoginForm';
import type {
  SignupFormMutation,
  CreateUserErrorReason,
} from './__generated__/SignupFormMutation.graphql';

const SignupFormWrapper = styled(Wrapper)(({ theme }) => ({
  form: {
    '& > *': {
      marginBottom: theme.spacing.normal,
    },
  },
}));

const getText = (reason: CreateUserErrorReason) => {
  switch (reason) {
    case 'USERNAME_EXISTS':
      return 'Username is already taken';
    case 'EMAIL_EXISTS':
      return 'Email already exists'; // TODO: Link to forgot password
    default:
      return 'Failed to create user';
  }
};

export default function SignupForm(): React.Node {
  const { push } = useRouter();
  const showToast = useShowToast();
  const [commitMutation, isLoading] = useMutation<SignupFormMutation>(graphql`
    mutation SignupFormMutation($input: CreateUserInput!) {
      createUser(input: $input) {
        ... on User {
          __typename
        }
        ... on CreateUserError {
          reason
        }
      }
    }
  `);
  const onSubmit = ({ username, email, password }) => {
    commitMutation({
      variables: { input: { username, email, password } },
      onCompleted: (response) => {
        if (response.createUser?.__typename === 'User') {
          showToast({ text: 'User successfully created, you are being redirect to login page.' });
          setTimeout(() => {
            push('/login');
          }, 1500);
        } else if (response.createUser?.reason != null) {
          showToast({ text: getText(response.createUser.reason), type: 'danger' });
        }
      },
    });
  };
  return (
    <SignupFormWrapper>
      <Signup isLoading={isLoading} onSubmit={onSubmit} />
    </SignupFormWrapper>
  );
}
