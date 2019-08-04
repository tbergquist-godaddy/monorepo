// @flow

import * as React from 'react';
import { Row, Col, Link } from '@tbergq/components';
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
    <Layout>
      <Row>
        <Col offset={{ md: 3 }} md={6}>
          <LoginForm />
        </Col>
        <Col offset={{ md: 3 }} md={6} align="end">
          <Link prefetch={true} href="/signup">
            Don&lsquo;t have an account? Signup
          </Link>
        </Col>
      </Row>
    </Layout>
  );
}

Login.getInitialProps = () => {
  return {};
};
