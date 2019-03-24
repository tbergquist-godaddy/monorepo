// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { Heading } from '@tbergq/tvhelper-components';

import FavoritesTable from './FavoritesTable';
import type { FavoriteScene_favorites as Favorites } from './__generated__/FavoriteScene_favorites.graphql';

type Props = {|
  +favorites: Favorites,
|};

const FavoriteScene = (props: Props) => (
  <>
    <Heading>Favorites</Heading>
    <FavoritesTable favorites={props.favorites} />
  </>
);

export default createFragmentContainer(FavoriteScene, {
  favorites: graphql`
    fragment FavoriteScene_favorites on TvShowConnection {
      ...FavoritesTable_favorites
    }
  `,
});
