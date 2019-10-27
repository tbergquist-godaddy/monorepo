// @flow

import * as React from 'react';
import { Link, CenterForm } from '@tbergq/components';
import { isLoggedIn } from '@tbergq/utils';
import Router from 'next/router';

import Layout from '../src/components/Layout';
import LoginForm from '../src/login/LoginForm';

export default function Login() {
  React.useEffect(() => {
    if (isLoggedIn()) {
      Router.push('/favorites');
    }
  });
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

Login.getInitialProps = () => {
  return {};
};
