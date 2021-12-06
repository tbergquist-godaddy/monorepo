import { QueryRenderer, graphql, useRelayEnvironment } from 'react-relay';
import { Spinner, Box } from '@tbergq/components';
import { SearchQueryResponse } from '__generated__/SearchQuery.graphql';

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

type RenderProps = {
  error: Error | null;
  props: SearchQueryResponse | null;
  retry: (() => void) | null;
};
export default function SearchQuery({ query }: Props): JSX.Element {
  const environment = useRelayEnvironment();

  return (
    <QueryRenderer
      query={searchQuery}
      environment={environment}
      variables={{ query }}
      fetchPolicy="store-and-network"
      render={({ props, error }: RenderProps) => {
        if (props) {
          return <SearchResults results={props?.searchTvShow} />;
        }
        if (error) {
          <div>Failed to load data from the server</div>;
        }
        return (
          <Box display="flex" justifyContent="center">
            <Spinner />
          </Box>
        );
      }}
    />
  );
}
