// @flow

import * as React from 'react';
import { graphql, QueryRenderer, type GraphQLTaggedNode } from '@tbergq/relay';

import type { TvShowQueryResponse } from './__generated__/TvShowQuery.graphql';
import TvShowPage from './TvShowPage';
import Layout from '../components/Layout';

type Props = {|
  +tvShowId: ?string,
|};

export const tvShowQuery: GraphQLTaggedNode = graphql`
  query TvShowQuery($id: ID!) {
    viewer {
      ...Layout_viewer
    }
    node(id: $id) {
      ...TvShowPage_tvShow
    }
  }
`;

function renderQuery(props: ?TvShowQueryResponse) {
  return (
    <Layout viewer={props?.viewer}>
      <TvShowPage tvShow={props?.node} />
    </Layout>
  );
}

export default function TvShowQuery(props: Props): React.Node {
  if (props.tvShowId == null) {
    return null;
  }
  return (
    <QueryRenderer
      renderLoader={false}
      query={tvShowQuery}
      variables={{ id: props.tvShowId }}
      render={renderQuery}
    />
  );
}
