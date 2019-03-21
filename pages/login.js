// @flow

import * as React from 'react';
import { Layout, Row, Col } from '@tbergq/tvhelper-components';
import { TOKEN_KEY } from '@tbergq/tvhelper-relay';
import Router from 'next/router';

import LoginForm from '../src/login/LoginForm';

export default function Login() {
  React.useEffect(() => {
    if (localStorage !== undefined) {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        Router.push('/favorites');
      }
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
