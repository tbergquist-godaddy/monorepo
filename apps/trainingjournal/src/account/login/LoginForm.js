// @flow strict-local

import * as React from 'react';
import { LoginForm as Login, useShowToast } from '@tbergq/components';
import { useMutation, graphql } from '@tbergq/relay';
import styled from 'styled-components';
import { TOKEN_KEY } from '@tbergq/utils';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

import type { LoginFormMutation } from './__generated__/LoginFormMutation.graphql';

const Wrapper = styled.div({
  maxWidth: '500px',
  margin: '0 auto',
});

export default function LoginForm(): React.Node {
  const showToast = useShowToast();
  const { push } = useRouter();
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
        if (login?.success === true && login.token != null) {
          cookie.set(TOKEN_KEY, login.token);
          showToast({ type: 'success', text: 'Successfully logged in' });
          push('/home');
        } else {
          showToast({ type: 'danger', text: 'Login failed' });
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
