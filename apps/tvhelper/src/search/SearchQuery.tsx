import { useLazyLoadQuery, graphql } from 'react-relay';
import type { SearchQuery as SearchQueryType } from '__generated__/SearchQuery.graphql';

import SearchResults from './searchResults/SearchResults';

type Props = {
  query: string;
};

export const searchQuery = graphql`
  query SearchQuery($query: String!) {
    searchTvShow(query: $query) {
      ...SearchResults_results
    }
  }
`;

export default function SearchQuery({ query }: Props) {
  const data = useLazyLoadQuery<SearchQueryType>(
    searchQuery,
    { query },
    { fetchPolicy: 'store-or-network' },
  );

  return <SearchResults results={data?.searchTvShow} />;
}
