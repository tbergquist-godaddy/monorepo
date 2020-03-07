// @flow

import * as React from 'react';
import { getNextToken } from '@tbergq/utils';
import { CenterForm } from '@tbergq/components';

import SignupForm from '../src/signup/SignupForm';
import Layout from '../src/components/DeprecatedLayout';

export default function Signup() {
  return (
    <Layout isLoggedIn={false}>
      <CenterForm>
        <SignupForm />
      </CenterForm>
    </Layout>
  );
}

Signup.getInitialProps = ctx => {
  const token = getNextToken(ctx);

  if (token != null) {
    ctx.res.writeHead(302, { Location: '/favorites' });
    ctx.res.end();
  }

  return {};
};
