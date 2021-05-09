// @flow

import type { Element } from 'react';
import { Alert, Link, CenterForm } from '@tbergq/components';
import styled from 'styled-components';

import LoginForm from './LoginForm';

const ErrorWrapper = styled.div({
  margin: '16px 0',
});

type Props = {
  +loginFailed: boolean,
};
// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
// $FlowFixMe[incompatible-type] $FlowFixMe(>=<150.1>)
export default function Login(props: Props): Element<typeof CenterForm> {
  return (
    // $FlowFixMe[incompatible-return] $FlowFixMe(>=<150.1>)
    <CenterForm>
      <LoginForm />
      <>
        {props.loginFailed ? (
          <ErrorWrapper>
            <Alert type="danger">Wrong username or password</Alert>
          </ErrorWrapper>
        ) : null}
        <Link prefetch={true} href="/signup">
          Don&lsquo;t have an account? Signup
        </Link>
      </>
    </CenterForm>
  );
}
