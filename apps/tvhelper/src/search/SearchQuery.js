// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';

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
    <QueryRenderer query={searchQuery} render={renderInner} variables={{ query: props.query }} />
  );
}
