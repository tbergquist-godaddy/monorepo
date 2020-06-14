// @flow strict-local

import * as React from 'react';
import { LoginForm as Login } from '@tbergq/components';
import { useMutation, graphql } from '@tbergq/relay';
import styled from 'styled-components';

import type { LoginFormMutation } from './__generated__/LoginFormMutation.graphql';

const Wrapper = styled.div({
  maxWidth: '500px',
  margin: '0 auto',
});

export default function LoginForm(): React.Node {
  const [login] = useMutation<LoginFormMutation>(graphql`
    mutation LoginFormMutation($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        success
      }
    }
  `);
  const onSubmit = ({ username, password }, { setSubmitting }) => {
    login({
      variables: { username, password },
      onCompleted: ({ login }) => {
        if (login?.success === true) {
          // TODO: Redirect
        } else {
          // TODO: Show toast
        }
        setSubmitting(false);
      },
    });
  };
  return (
    <Wrapper>
      <Login onSubmit={onSubmit} />
    </Wrapper>
  );
}
