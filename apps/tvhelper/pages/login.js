// @flow

import * as React from 'react';
import { Link, CenterForm } from '@tbergq/components';
import { getNextToken } from '@tbergq/utils';

import Layout from '../src/components/Layout';
import LoginForm from '../src/login/LoginForm';

export default function Login() {
  return (
    <Layout isLoggedIn={false}>
      <CenterForm>
        <LoginForm />
        <Link prefetch={true} href="/signup">
          Don&lsquo;t have an account? Signup
        </Link>
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

  return {};
};
