import { useState, ChangeEvent } from 'react';
import { Heading, Select } from '@tbergq/components';
import { createRefetchContainer, graphql, RelayRefetchProp } from 'react-relay';
import { Favorites_favorites as FavoritesType } from '__generated__/Favorites_favorites.graphql';
import dynamic from 'next/dynamic';
import Box from 'components/Box';

import FavoriteListItem from './FavoriteListItem';

const FavoritesLoader = dynamic(() => import('./FavoritesLoader'));
const LoadMore = dynamic(() => import('./LoadMore'));

type Props = Readonly<{
  favorites: FavoritesType;
  relay: RelayRefetchProp;
}>;

const sortByOptions = [
  {
    label: 'Name',
    value: 'NAME',
  },
  {
    label: 'Next episode',
    value: 'NEXT_EPISODE',
  },
  {
    label: 'Previous episode',
    value: 'PREVIOUS_EPISODE',
  },
  {
    label: 'Status',
    value: 'STATUS',
  },
];

function Favorites(props: Props) {
  const [sortState, setSortState] = useState({
    sortBy: 'PREVIOUS_EPISODE',
    sortDirection: 'DESC',
  });
  const { sortBy, sortDirection } = sortState;
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const edges = props.favorites?.favorites?.edges ?? [];
  const [isLoading, setIsLoading] = useState(false);

  const refetch = ({ sortBy, sortDirection }) => {
    setIsLoading(true);
    props.relay.refetch(
      {
        options: {
          sortBy,
          sortDirection,
        },
        first: 10,
      },
      null,
      () => {
        setIsLoading(false);
      },
      { fetchPolicy: 'store-or-network' },
    );
  };

  const loadMore = (loadAll = false) => {
    setIsLoadingMore(true);
    props.relay.refetch(
      {
        options: {
          sortBy,
          sortDirection: sortDirection,
        },
        first: loadAll ? null : edges.length + 10,
      },
      null,
      () => {
        setIsLoadingMore(false);
      },
      { fetchPolicy: 'store-or-network' },
    );
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortState((state) => {
      const newState = {
        ...state,
        [e.target.name]: e.target.value,
      };

      refetch(newState);
      return newState;
    });
  };

  return (
    <>
      {isLoading && <FavoritesLoader />}
      <Heading>Favorites</Heading>
      <>
        <Box display="flex" pt={8}>
          <Box mr={4}>
            <Select
              onChange={handleChange}
              label="Sort by"
              name="sortBy"
              options={sortByOptions}
              value={sortBy}
            />
          </Box>
          <Select
            label="Direction"
            name="sortDirection"
            value={sortDirection}
            onChange={handleChange}
            options={[
              { label: 'Ascending', value: 'ASC' },
              { label: 'Descending', value: 'DESC' },
            ]}
          />
        </Box>
        <Box pt={8}>
          {edges.map((edge) => (
            <FavoriteListItem favorite={edge?.node} key={edge?.node?.id} />
          ))}
        </Box>
        {props.favorites?.favorites?.pageInfo.hasNextPage && (
          <Box pt={8} display="flex" justifyContent="center" gap="12px">
            <LoadMore
              isLoading={isLoadingMore}
              onClick={() => {
                loadMore();
              }}
            />
            <LoadMore
              isLoading={isLoadingMore}
              onClick={() => {
                const loadAll = true;
                loadMore(loadAll);
              }}
              text="Load all"
            />
          </Box>
        )}
      </>
    </>
  );
}

export default createRefetchContainer(
  Favorites,
  {
    favorites: graphql`
      fragment Favorites_favorites on TvHelperViewer
      @argumentDefinitions(
        options: {
          type: "SortOptions"
          defaultValue: { sortDirection: DESC, sortBy: PREVIOUS_EPISODE }
        }
        first: { type: "Int", defaultValue: 10 }
      ) {
        favorites(options: $options, first: $first) @connection(key: "Favorites_favorites") {
          pageInfo {
            hasNextPage
          }
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
    query FavoritesQuery($options: SortOptions, $first: Int) {
      viewer {
        ...Favorites_favorites @arguments(options: $options, first: $first)
      }
    }
  `,
);
