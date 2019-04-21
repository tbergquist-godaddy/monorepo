// @flow

import * as React from 'react';
import { Row, Col } from '@tbergq/tvhelper-components';

import Layout from '../src/components/Layout';
import LoginScene from '../src/login/LoginScene';

export default function Login() {
  return (
    <Layout>
      <Row>
        <Col offset={{ md: 3 }} md={6}>
          <LoginScene />
        </Col>
      </Row>
    </Layout>
  );
}
