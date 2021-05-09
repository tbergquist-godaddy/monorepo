// @flow strict-local

import type { Node } from 'react';
import { graphql, createFragmentContainer, type FragmentContainerType } from '@tbergq/relay';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
// $FlowFixMe[untyped-type-import] $FlowFixMe(>=<150.1>)
import styled, { type StyledComponent } from 'styled-components';

import type { SearchResults_results as ResultsType } from './__generated__/SearchResults_results.graphql';
import TvShowListItem from './TvShowListItem';

type Props = {
  +results: ?ResultsType,
};

// $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
const GridContainer: StyledComponent<{ +children: Node }, void, HTMLDivElement> = styled.div(
  ({ theme }) => ({
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
  }),
);

const SearchResults = (props: Props) => {
  const edges = props.results?.edges ?? [];
  return (
    <GridContainer>
      {edges.map<Node>((item) => (
        <TvShowListItem data={item?.node} key={item?.node?.id} />
      ))}
    </GridContainer>
  );
};

export default (createFragmentContainer(SearchResults, {
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
}): FragmentContainerType<Props, Node>);
