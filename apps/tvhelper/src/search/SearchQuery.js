// @flow strict-local

import { memo, type AbstractComponent } from 'react';
import { QueryRenderer, graphql, type GraphQLTaggedNode } from '@tbergq/relay';

import type { SearchQueryResponse } from './__generated__/SearchQuery.graphql';
import SearchScene from './SearchScene';

type Props = {
  +query: string,
};

export const searchQuery: GraphQLTaggedNode = graphql`
  query SearchQuery($query: String!, $includeResults: Boolean!) {
    ...SearchScene_search @arguments(includeResults: $includeResults, query: $query)
    ...SearchScene_viewer
  }
`;

const renderInner = (props: ?SearchQueryResponse) => {
  return <SearchScene search={props} viewer={props} />;
};

function SearchQuery(props: Props) {
  return (
    <QueryRenderer
      query={searchQuery}
      render={renderInner}
      variables={{ query: props.query, includeResults: !!props.query }}
    />
  );
}

export default (memo<Props>(SearchQuery): AbstractComponent<Props>);
