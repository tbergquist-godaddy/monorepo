// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type RelayEnvironmentType } from '@tbergq/relay';
import { TvShowListItem } from '@tbergq/tvhelper-xplat';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import type { SearchResults_results as ResultsType } from './__generated__/SearchResults_results.graphql';

type NavigationOptions = {|
  +id: ?string,
  +name: ?string,
  +environment: RelayEnvironmentType,
|};

type Props = {|
  +results: ?ResultsType,
|};

const GridContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridAutoRows: '260px',
  gridGap: '16px',
});

const SearchResults = (props: Props) => {
  const router = useRouter();
  const onPress = ({ id }: NavigationOptions) => {
    router.push({
      pathname: '/tvShow',
      query: { id },
    });
  };
  const edges = props.results?.edges ?? [];
  return (
    <GridContainer>
      {edges.map<React.Node>(item => (
        <TvShowListItem data={item?.node} onPress={onPress} key={item?.node?.id} />
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
          ...TvShowItem_data
        }
      }
    }
  `,
});
