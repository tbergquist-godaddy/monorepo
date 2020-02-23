// @flow strict-local

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import styled, { type StyledComponent } from 'styled-components';

import type { SearchResults_results as ResultsType } from './__generated__/SearchResults_results.graphql';
import TvShowListItem from './TvShowListItem';

type Props = {|
  +results: ?ResultsType,
|};

const GridContainer: StyledComponent<
  {| +children: React.Node |},
  void,
  HTMLDivElement,
> = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridAutoRows: '260px',
  gridGap: '16px',
});

const SearchResults = (props: Props) => {
  const edges = props.results?.edges ?? [];
  return (
    <GridContainer>
      {edges.map<React.Node>(item => (
        <TvShowListItem data={item?.node} key={item?.node?.id} />
      ))}
    </GridContainer>
  );
};

export default createFragmentContainer(SearchResults, {
  results: graphql`
    fragment SearchResults_results on TvShowConnection {
      edges {
        node {
          id
          ...TvShowListItem_data
        }
      }
    }
  `,
});
