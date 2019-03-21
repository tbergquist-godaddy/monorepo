// @flow

import * as React from 'react';
import { Layout } from '@tbergq/tvhelper-components';
import { isLoggedIn } from '@tbergq/tvhelper-utils';
import Router from 'next/router';

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
