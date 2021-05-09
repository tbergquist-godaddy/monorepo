// @flow

import type { Element } from 'react';
import { graphql, QueryRenderer, type GraphQLTaggedNode } from '@tbergq/relay';
import { Formik } from 'formik';

import type { FavoriteQueryResponse } from './__generated__/FavoriteQuery.graphql';
import Favorites from './Favorites';
import Layout from '../components/Layout';

export const favoritesQuery: GraphQLTaggedNode = graphql`
  query FavoriteQuery($options: SortOptions) {
    viewer {
      ...Layout_viewer
      ...Favorites_favorites @arguments(options: $options)
    }
  }
`;

const renderQuery = (props: ?FavoriteQueryResponse) => (
  <Layout viewer={props?.viewer}>
    {/* $FlowFixMe[prop-missing] $FlowFixMe(>=<150.1>) */}
    <Formik initialValues={{ sortBy: 'PREVIOUS_EPISODE', sortDirection: 'DESC' }}>
      <Favorites favorites={props?.viewer} />
    </Formik>
  </Layout>
);

export default function FavoriteQuery(): Element<typeof QueryRenderer> {
  return (
    <QueryRenderer
      query={favoritesQuery}
      renderLoader={false}
      variables={{ options: { sortDirection: 'DESC', sortBy: 'PREVIOUS_EPISODE' } }}
      render={renderQuery}
    />
  );
}
