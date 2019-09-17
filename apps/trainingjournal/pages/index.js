// @flow

import * as React from 'react';
import { isLoggedIn } from '@tbergq/utils';
import Router from 'next/router';

import Layout from '../src/components/Layout';

export default function Index() {
  React.useEffect(() => {
    if (!isLoggedIn()) {
      Router.push('/login');
    } else {
      Router.push('/home');
    }
  }, []);
  return (
    <Layout>
      <div>This page is not yet finished</div>
      <div>You are being redirected soon...</div>
    </Layout>
  );
}
