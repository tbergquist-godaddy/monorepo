// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/tvhelper-relay';

import type { SearchQueryResponse } from './__generated__/SearchQuery.graphql';
import SearchResults from './searchResults/SearchResults';

type Props = {|
  +query: string,
|};

const renderInner = (props: SearchQueryResponse) => {
  return <SearchResults results={props.searchTvShow} />;
};

export default function SearchQuery(props: Props) {
  if (props.query === '') {
    return null;
  }
  return (
    <QueryRenderer
      query={graphql`
        query SearchQuery($query: String!) {
          searchTvShow(query: $query) {
            ...SearchResults_results
          }
        }
      `}
      render={renderInner}
      variables={{ query: props.query }}
    />
  );
}
