// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';

import type { SearchResults_results as ResultsType } from './__generated__/SearchResults_results.graphql';
import SearchResultItem from './SearchResultItem';

type Props = {|
  +results: ?ResultsType,
|};

const SearchResults = (props: Props) => {
  const edges = props.results?.edges ?? [];

  return edges.map(edge => (
    <SearchResultItem key={edge?.node?.id} tvShow={edge?.node} />
  ));
};

export default createFragmentContainer(SearchResults, {
  results: graphql`
    fragment SearchResults_results on TvShowConnection {
      edges {
        node {
          id
          ...SearchResultItem_tvShow
        }
      }
    }
  `,
});
