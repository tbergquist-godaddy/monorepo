// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@tbergq/tvhelper-components';

import type { FavoritesTable_favorites as Favorites } from './__generated__/FavoritesTable_favorites.graphql';
import FavoriteItem from './FavoriteItem';

type Props = {|
  +favorites: ?Favorites,
|};

const FavoritesTable = (props: Props) => {
  const edges = props.favorites?.edges ?? [];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Next episode</TableCell>
          <TableCell>Previous episode</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {edges.map(edge => (
          <FavoriteItem key={edge?.node?.id} favorite={edge?.node} />
        ))}
      </TableBody>
    </Table>
  );
};

export default createFragmentContainer(FavoritesTable, {
  favorites: graphql`
    fragment FavoritesTable_favorites on TvShowConnection {
      edges {
        node {
          id
          ...FavoriteItem_favorite
        }
      }
    }
  `,
});
