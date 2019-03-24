// @flow

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RefetchRelayProp,
} from '@tbergq/tvhelper-relay';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  Heading,
} from '@tbergq/tvhelper-components';

import type { FavoritesTable_favorites as Favorites } from './__generated__/FavoritesTable_favorites.graphql';
import FavoriteItem from './FavoriteItem';
import FavoriteHeaderCell from './FavoriteHeaderCell';

type Props = {|
  +favorites: ?Favorites,
  +relay: RefetchRelayProp,
|};

const FavoritesTable = (props: Props) => {
  const edges = props.favorites.favorites?.edges ?? [];
  const [options, setOptions] = React.useState({
    sortBy: 'NAME',
    ascending: true,
  });

  function onClick(e) {
    setOptions(oldValue => {
      const newOptions = {
        sortBy: e.target.id,
        ascending:
          e.target.id === oldValue.sortBy
            ? !oldValue.ascending
            : oldValue.ascending,
      };
      props.relay.refetch({
        options: {
          sortBy: newOptions.sortBy,
          sortDirection: newOptions.ascending ? 'ASC' : 'DESC',
        },
      });
      return newOptions;
    });
  }
  return (
    <>
      <Heading>Favorites</Heading>
      <Table>
        <TableHead>
          <TableRow>
            <FavoriteHeaderCell sortKey="NAME" onClick={onClick} align="left">
              Name
            </FavoriteHeaderCell>
            <FavoriteHeaderCell
              sortKey="NEXT_EPISODE"
              onClick={onClick}
              align="left"
            >
              Next episode
            </FavoriteHeaderCell>
            <FavoriteHeaderCell sortKey="PREVIOUS_EPISODE" onClick={onClick}>
              Previous episode
            </FavoriteHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {edges.map(edge => (
            <FavoriteItem key={edge?.node?.id} favorite={edge?.node} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default createRefetchContainer(
  FavoritesTable,
  {
    favorites: graphql`
      fragment FavoritesTable_favorites on RootQuery
        @argumentDefinitions(
          options: {
            type: "SortOptions"
            defaultValue: { sortDirection: "ASC", sortBy: "NAME" }
          }
        ) {
        favorites(options: $options) {
          edges {
            node {
              id
              ...FavoriteItem_favorite
            }
          }
        }
      }
    `,
  },
  graphql`
    query FavoritesTableQuery($options: SortOptions) {
      ...FavoritesTable_favorites @arguments(options: $options)
    }
  `,
);
