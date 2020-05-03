// @flow strict-local

import * as React from 'react';
import { Heading } from '@tbergq/components';
import { createRefetchContainer, graphql, type RefetchContainerType } from '@tbergq/relay';
import styled from 'styled-components';

import type { Favorites_favorites as FavoritesType } from './__generated__/Favorites_favorites.graphql';
import FavoriteListItem from './FavoriteListItem';

type Props = {
  +favorites: ?FavoritesType,
};

const FavoritesWrapper = styled.div({
  overflow: 'hidden',
});

function Favorites(props: Props) {
  const edges = props.favorites?.favorites?.edges ?? [];

  return (
    <>
      <Heading>Favorites</Heading>
      <FavoritesWrapper>
        {edges.map(edge => (
          <FavoriteListItem favorite={edge?.node} key={edge?.node?.id} />
        ))}
      </FavoritesWrapper>
    </>
  );
}

export default (createRefetchContainer(
  Favorites,
  {
    favorites: graphql`
      fragment Favorites_favorites on TvHelperViewer
        @argumentDefinitions(
          options: {
            type: "SortOptions"
            defaultValue: { sortDirection: "DESC", sortBy: "PREVIOUS_EPISODE" }
          }
        ) {
        favorites(options: $options) {
          edges {
            node {
              id
              ...FavoriteListItem_favorite
            }
          }
        }
      }
    `,
  },
  graphql`
    query FavoritesQuery($options: SortOptions) {
      viewer {
        ...Favorites_favorites @arguments(options: $options)
      }
    }
  `,
): RefetchContainerType<Props, React.Node>);
