// @flow

import * as React from 'react';
import { Row, Col } from '@tbergq/components';
import { isLoggedIn } from '@tbergq/utils';
import Router from 'next/router';

import SignupForm from '../src/signup/SignupForm';
import Layout from '../src/components/Layout';

export default function Signup() {
  React.useEffect(() => {
    if (isLoggedIn()) {
      Router.push('/favorites');
    }
  });
  return (
    <Layout isLoggedIn={false}>
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
