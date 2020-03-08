// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { FavoriteQueryResponse } from './__generated__/FavoriteQuery.graphql';
import FavoritesTable from './FavoritesTable';
import Layout from '../components/Layout';

export const favoritesQuery = graphql`
  query FavoriteQuery {
    viewer {
      ...Layout_viewer
      ...FavoritesTable_favorites
    }
  }
`;

const renderQuery = (props: FavoriteQueryResponse) => (
  <Layout viewer={props.viewer}>
    <FavoritesTable favorites={props.viewer} />
  </Layout>
);

export default function FavoriteQuery() {
  return <QueryRenderer query={favoritesQuery} variables={{}} render={renderQuery} />;
}
