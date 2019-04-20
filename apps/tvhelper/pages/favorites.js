// @flow

import * as React from 'react';
import { isLoggedIn } from '@tbergq/tvhelper-utils';
import Router from 'next/router';

import Layout from '../src/components/Layout';
import FavoriteQuery from '../src/favorites/FavoriteQuery';

export default function Favorites() {
  React.useEffect(() => {
    if (!isLoggedIn()) {
      Router.push('/login');
    }
  });
  return (
    <Layout>
      <FavoriteQuery />
    </Layout>
  );
}
