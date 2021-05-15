// @flow

import type { Node } from 'react';
import { graphql, QueryRenderer, type GraphQLTaggedNode } from '@tbergq/relay';

import type { TvShowQueryResponse } from '__generated__/TvShowQuery.graphql';
import TvShowPage from './TvShowPage';

type Props = {
  +tvShowId: ?string,
};

export const tvShowQuery: GraphQLTaggedNode = graphql`
  query TvShowQuery($id: ID!) {
    viewer {
      __typename
    }
    node(id: $id) {
      ...TvShowPage_tvShow
    }
  }
`;

function renderQuery(props: ?TvShowQueryResponse) {
  return <TvShowPage tvShow={props?.node} />;
}

export default function TvShowQuery(props: Props): Node {
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
