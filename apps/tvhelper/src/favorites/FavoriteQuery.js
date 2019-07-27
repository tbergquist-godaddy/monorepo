// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { FavoriteQueryResponse } from './__generated__/FavoriteQuery.graphql';
import FavoritesTable from './FavoritesTable';

const renderQuery = (props: FavoriteQueryResponse) => <FavoritesTable favorites={props} />;

export default function FavoriteQuery() {
  return (
    <QueryRenderer
      query={graphql`
        query FavoriteQuery {
          ...FavoritesTable_favorites
        }
      `}
      variables={{}}
      render={renderQuery}
    />
  );
}
