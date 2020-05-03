// @flow

import * as React from 'react';
import { graphql, QueryRenderer, type GraphQLTaggedNode } from '@tbergq/relay';
import { Formik } from 'formik';

import type { FavoriteQueryResponse } from './__generated__/FavoriteQuery.graphql';
import Favorites from './Favorites';
import Layout from '../components/Layout';

export const favoritesQuery: GraphQLTaggedNode = graphql`
  query FavoriteQuery {
    viewer {
      ...Layout_viewer
      ...Favorites_favorites
    }
  }
`;

const renderQuery = (props: ?FavoriteQueryResponse) => (
  <Layout viewer={props?.viewer}>
    <Formik initialValues={{ sortBy: 'PREVIOUS_EPISODE', sortDirection: 'DESC' }}>
      <Favorites favorites={props?.viewer} />
    </Formik>
  </Layout>
);

export default function FavoriteQuery(): React.Element<typeof QueryRenderer> {
  return (
    <QueryRenderer
      query={favoritesQuery}
      renderLoader={false}
      variables={{}}
      render={renderQuery}
    />
  );
}
