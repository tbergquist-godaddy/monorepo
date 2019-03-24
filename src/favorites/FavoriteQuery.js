// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/tvhelper-relay';

import type { FavoriteQueryResponse } from './__generated__/FavoriteQuery.graphql';
import FavoriteScene from './FavoriteScene';

const renderQuery = (props: FavoriteQueryResponse) => (
  <FavoriteScene favorites={props.favorites} />
);

export default function FavoriteQuery() {
  return (
    <QueryRenderer
      query={graphql`
        query FavoriteQuery {
          favorites {
            ...FavoriteScene_favorites
          }
        }
      `}
      variables={{}}
      render={renderQuery}
    />
  );
}
