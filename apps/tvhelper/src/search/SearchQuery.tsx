import { QueryRenderer, graphql, useRelayEnvironment } from 'react-relay';
import { Spinner } from '@tbergq/components';
import Box from 'components/Box';

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
  const environment = useRelayEnvironment();

  return (
    <QueryRenderer
      query={searchQuery}
      environment={environment}
      variables={{ query }}
      fetchPolicy="store-and-network"
      render={({ props, error }: any) => {
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
