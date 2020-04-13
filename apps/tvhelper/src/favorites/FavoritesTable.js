// @flow

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RefetchRelayProp,
  type RefetchContainerType,
} from '@tbergq/relay';
import { Table, TableHead, TableRow, TableBody, Heading, Spinner } from '@tbergq/components';
import styled from 'styled-components';

import FavoritesLoader from './FavoritesLoader';
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
  backgroundColor: 'rgba(0,0,0,0.1)',
  borderRadius: '6px',
  padding: '8px',
});

const FavoritesTable = (props: Props) => {
  const [options, setOptions] = React.useState({
    sortBy: 'PREVIOUS_EPISODE',
    ascending: false,
  });
  const [isLoading, setIsLoading] = React.useState(false);
  if (props.favorites == null) {
    return <FavoritesLoader />;
  }
  const edges = props.favorites.favorites?.edges ?? [];
  function onClick(sortBy: string) {
    setIsLoading(true);
    setOptions(oldValue => {
      const newOptions = {
        sortBy,
        ascending: sortBy === oldValue.sortBy ? !oldValue.ascending : oldValue.ascending,
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
        { fetchPolicy: 'store-or-network' },
      );
      return newOptions;
    });
  }

  return (
    <>
      <Heading>Favorites</Heading>
      {isLoading && (
        <Loader>
          <Spinner dataTest="tableLoader" />
        </Loader>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <FavoriteHeaderCell {...options} sortKey="NAME" onClick={onClick} align="left">
              Name
            </FavoriteHeaderCell>
            <FavoriteHeaderCell {...options} sortKey="NEXT_EPISODE" onClick={onClick} align="left">
              Next episode
            </FavoriteHeaderCell>
            <FavoriteHeaderCell {...options} sortKey="PREVIOUS_EPISODE" onClick={onClick}>
              Previous episode
            </FavoriteHeaderCell>
            <FavoriteHeaderCell {...options} sortKey="STATUS" onClick={onClick}>
              Status
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

export default (createRefetchContainer(
  FavoritesTable,
  {
    favorites: graphql`
      fragment FavoritesTable_favorites on TvHelperViewer
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
              ...FavoriteItem_favorite
            }
          }
        }
      }
    `,
  },
  graphql`
    query FavoritesTableQuery($options: SortOptions) {
      viewer {
        ...FavoritesTable_favorites @arguments(options: $options)
      }
    }
  `,
): RefetchContainerType<Props, React.Node>);
