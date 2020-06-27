// @flow strict-local

import * as React from 'react';
import { LoginForm as Login, useShowToast, Link } from '@tbergq/components';
import { useMutation, graphql } from '@tbergq/relay';
import styled, { type StyledComponent } from 'styled-components';
import { TOKEN_KEY } from '@tbergq/utils';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

import type { LoginFormMutation } from './__generated__/LoginFormMutation.graphql';

export const Wrapper: StyledComponent<{ +children: React.Node }, null, HTMLDivElement> = styled.div(
  {
    maxWidth: '500px',
    margin: '0 auto',
  },
);

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
      <div>
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </div>
    </Wrapper>
  );
}
