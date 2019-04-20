// @flow

import * as React from 'react';
import { Layout, Row, Col } from '@tbergq/tvhelper-components';

import SignupForm from '../src/signup/SignupForm';

export default function Signup() {
  return (
    <Layout>
      <Row>
        <Col offset={{ md: 3 }} md={6}>
          <SignupForm />
        </Col>
      </Row>
    </Layout>
  );
}
