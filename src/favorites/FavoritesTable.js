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
  Loading,
} from '@tbergq/tvhelper-components';
import styled from 'styled-components';

import type { FavoritesTable_favorites as Favorites } from './__generated__/FavoritesTable_favorites.graphql';
import FavoriteItem from './FavoriteItem';
import FavoriteHeaderCell from './FavoriteHeaderCell';

type Props = {|
  +favorites: ?Favorites,
  +relay: RefetchRelayProp,
|};

const Loader = styled.div({
  position: 'fixed',
  top: '50%',
  right: '50%',
  zIndex: 100,
  backgroundColor: 'rgba(0,0,0,0.5)',
  borderRadius: '6px',
});

const FavoritesTable = (props: Props) => {
  const edges = props.favorites.favorites?.edges ?? [];
  const [options, setOptions] = React.useState({
    sortBy: 'NAME',
    ascending: true,
  });
  const [isLoading, setIsLoading] = React.useState(false);

  function onClick(e) {
    e.persist();
    setIsLoading(true);
    setOptions(oldValue => {
      const newOptions = {
        sortBy: e.target.id,
        ascending:
          e.target.id === oldValue.sortBy
            ? !oldValue.ascending
            : oldValue.ascending,
      };
      props.relay.refetch(
        {
          options: {
            sortBy: newOptions.sortBy,
            sortDirection: newOptions.ascending ? 'ASC' : 'DESC',
          },
        },
        null,
        () => {
          setIsLoading(false);
        },
      );
      return newOptions;
    });
  }
  return (
    <>
      <Heading>Favorites</Heading>
      {isLoading && (
        <Loader>
          <Loading />
        </Loader>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <FavoriteHeaderCell
              {...options}
              sortKey="NAME"
              onClick={onClick}
              align="left"
            >
              Name
            </FavoriteHeaderCell>
            <FavoriteHeaderCell
              {...options}
              sortKey="NEXT_EPISODE"
              onClick={onClick}
              align="left"
            >
              Next episode
            </FavoriteHeaderCell>
            <FavoriteHeaderCell
              {...options}
              sortKey="PREVIOUS_EPISODE"
              onClick={onClick}
            >
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
