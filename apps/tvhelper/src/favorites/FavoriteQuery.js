// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { FavoriteQueryResponse } from './__generated__/FavoriteQuery.graphql';
import FavoritesTable from './FavoritesTable';

export const favoritesQuery = graphql`
  query FavoriteQuery {
    ...FavoritesTable_favorites
  }
`;

const renderQuery = (props: FavoriteQueryResponse) => <FavoritesTable favorites={props} />;

export default function FavoriteQuery() {
  return <QueryRenderer query={favoritesQuery} variables={{}} render={renderQuery} />;
}
