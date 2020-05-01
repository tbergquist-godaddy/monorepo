// @flow

import * as React from 'react';
import { Link, CenterForm } from '@tbergq/components';
import { Alert } from '@kiwicom/orbit-components';
import styled from 'styled-components';

import LoginForm from './LoginForm';

const ErrorWrapper = styled.div({
  margin: '16px 0',
});

type Props = {
  +loginFailed: boolean,
};
export default function Login(props: Props): React.Element<typeof CenterForm> {
  return (
    <CenterForm>
      <LoginForm />
      <>
        {props.loginFailed ? (
          <ErrorWrapper>
            <Alert type="critical">Wrong username or password</Alert>
          </ErrorWrapper>
        ) : null}
        <Link prefetch={true} href="/signup">
          Don&lsquo;t have an account? Signup
        </Link>
      </>
    </CenterForm>
  );
}
