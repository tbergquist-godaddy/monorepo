// @flow

import * as React from 'react';
import { Layout, Row, Col } from '@tbergq/tvhelper-components';
import { isLoggedIn } from '@tbergq/tvhelper-utils';
import Router from 'next/router';
import Link from 'next/link';

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
            <a>Don't have an account? Signup</a>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
}
