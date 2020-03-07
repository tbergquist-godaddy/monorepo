// @flow

import * as React from 'react';
import { Link, CenterForm, Alert } from '@tbergq/components';
import { getNextToken } from '@tbergq/utils';
import styled from 'styled-components';

import Layout from '../src/components/DeprecatedLayout';
import LoginForm from '../src/login/LoginForm';

const ErrorWrapper = styled.div({
  margin: '16px 0',
});

type Props = {
  +loginFailed: boolean,
};
export default function Login(props: Props) {
  return (
    <Layout isLoggedIn={false}>
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
    </Layout>
  );
}

Login.getInitialProps = ctx => {
  const token = getNextToken(ctx);

  if (token != null) {
    ctx.res.writeHead(302, { Location: '/favorites' });
    ctx.res.end();
  }

  return {
    loginFailed: ctx.query.responseError != null,
  };
};
