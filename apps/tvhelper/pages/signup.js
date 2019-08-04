// @flow

import * as React from 'react';
import { Row, Col } from '@tbergq/components';

import SignupForm from '../src/signup/SignupForm';
import Layout from '../src/components/Layout';

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

Signup.getInitialProps = () => {
  return {};
};
