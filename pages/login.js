// @flow

import * as React from 'react';
import { Layout, Row, Col } from '@tbergq/tvhelper-components';
import { isLoggedIn } from '@tbergq/tvhelper-utils';
import Router from 'next/router';

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
      </Row>
    </Layout>
  );
}
