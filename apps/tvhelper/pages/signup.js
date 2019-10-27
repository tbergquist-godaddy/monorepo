// @flow

import * as React from 'react';
import { isLoggedIn } from '@tbergq/utils';
import Router from 'next/router';
import { CenterForm } from '@tbergq/components';

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
      <CenterForm>
        <SignupForm />
      </CenterForm>
    </Layout>
  );
}

Signup.getInitialProps = () => {
  return {};
};
