// @flow

import * as React from 'react';
import { getNextToken } from '@tbergq/utils';

import FavoriteQuery, { favoritesQuery } from '../src/favorites/FavoriteQuery';

function Favorites() {
  return <FavoriteQuery />;
}

Favorites.getInitialProps = ctx => {
  const token = getNextToken(ctx) ?? '';

  if (token !== '') {
    return {
      query: favoritesQuery,
    };
  }
  ctx.res.writeHead(302, { Location: '/login' });
  ctx.res.end();

  return {};
};

export default (Favorites: React.ComponentType<{}>);
