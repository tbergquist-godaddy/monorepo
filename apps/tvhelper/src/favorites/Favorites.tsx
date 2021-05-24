import { useState, useRef, useCallback, useEffect, ChangeEvent } from 'react';
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
  const [sortBy, setSortBy] = useState('PREVIOUS_EPISODE');
  const [sortDirection, setSortDirection] = useState('DESC');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const isFirstRender = useRef(true);
  const edges = props.favorites?.favorites?.edges ?? [];
  const [isLoading, setIsLoading] = useState(false);

  const refetch = useCallback(
    (sortBy, sortDirection) => {
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
    },
    [props.relay],
  );
  useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
    } else {
      refetch(sortBy, sortDirection);
    }
  }, [sortBy, sortDirection, refetch]);

  const loadMore = () => {
    setIsLoadingMore(true);
    props.relay.refetch(
      {
        options: {
          sortBy,
          sortDirection: sortDirection,
        },
        first: edges.length + 10,
      },
      null,
      () => {
        setIsLoadingMore(false);
      },
      { fetchPolicy: 'store-or-network' },
    );
  };

  const makeHandleChange = (changeFn) => (e: ChangeEvent<HTMLSelectElement>) => {
    changeFn(e.target.value);
  };

  return (
    <>
      {isLoading && <FavoritesLoader />}
      <Heading>Favorites</Heading>
      <>
        <Box display="flex" pt={8}>
          <Box mr={4}>
            <Select
              onChange={makeHandleChange(setSortBy)}
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
            onChange={makeHandleChange(setSortDirection)}
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
          <Box pt={8}>
            <LoadMore isLoadingMore={isLoadingMore} loadMore={loadMore} />
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
