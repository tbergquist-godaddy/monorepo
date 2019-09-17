// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';
import { getToken } from '@tbergq/utils';

import type { SearchQueryResponse } from './__generated__/SearchQuery.graphql';
import SearchResults from './searchResults/SearchResults';

type Props = {|
  +query: string,
|};

export const searchQuery = graphql`
  query SearchQuery($query: String!) {
    searchTvShow(query: $query) {
      ...SearchResults_results
    }
  }
`;

const renderInner = (props: SearchQueryResponse) => {
  return <SearchResults results={props.searchTvShow} />;
};

export default function SearchQuery(props: Props) {
  if (props.query === '') {
    return null;
  }
  return (
    <QueryRenderer
      token={getToken()}
      query={searchQuery}
      render={renderInner}
      variables={{ query: props.query }}
    />
  );
}
