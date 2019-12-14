// @flow

import * as React from 'react';
import { getNextToken } from '@tbergq/utils';

import Layout from '../src/components/Layout';
import FavoriteQuery, { favoritesQuery } from '../src/favorites/FavoriteQuery';

type Props = {|
  isLoggedIn: boolean,
|};

export default function Favorites(props: Props) {
  return (
    <Layout isLoggedIn={props.isLoggedIn}>
      <FavoriteQuery />
    </Layout>
  );
}

Favorites.getInitialProps = ctx => {
  const token = getNextToken(ctx);

  if (token) {
    return {
      query: favoritesQuery,
    };
  }
  ctx.res.writeHead(302, { Location: '/login' });
  ctx.res.end();

  return {};
};
