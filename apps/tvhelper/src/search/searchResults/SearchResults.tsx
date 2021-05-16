import { ReactNode } from 'react';
import { graphql, useFragment } from 'react-relay';
import styled from 'styled-components';
import { SearchResults_results$key as ResultsType } from '__generated__/SearchResults_results.graphql';

import TvShowListItem from './TvShowListItem';

type Props = {
  results: ResultsType;
};

const GridContainer = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gridAutoRows: '250px',
  [theme.media.largeMobile]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gridAutoRows: '250px',
  },
  [theme.media.tablet]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gridAutoRows: '280px',
  },

  gridGap: '16px',
}));

const SearchResults = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment SearchResults_results on TvShowConnection {
        edges {
          node {
            id
            ...TvShowListItem_data
          }
        }
      }
    `,
    props.results,
  );

  const edges = data.edges ?? [];
  return (
    <GridContainer>
      {edges.map<ReactNode>((item) => (
        <TvShowListItem data={item?.node} key={item?.node?.id} />
      ))}
    </GridContainer>
  );
};

export default SearchResults;
