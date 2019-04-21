// @flow

import * as React from 'react';
import { isLoggedIn } from '@tbergq/tvhelper-utils';
import Router from 'next/router';

import Layout from '../src/components/Layout';

export default function Index() {
  React.useEffect(() => {
    if (!isLoggedIn(false)) {
      Router.push('/login');
    }
  }, []);
  return (
    <Layout>
      <div>test</div>
    </Layout>
  );
}
