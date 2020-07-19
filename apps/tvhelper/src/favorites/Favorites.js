// @flow strict-local

import * as React from 'react';
import { Heading, Select, Spinner, Stack, Button } from '@tbergq/components';
import {
  createRefetchContainer,
  graphql,
  type RefetchContainerType,
  type RefetchRelayProp,
} from '@tbergq/relay';
import styled from 'styled-components';
import { useFormikContext } from 'formik';

import FavoritesLoader from './FavoritesLoader';
import type { Favorites_favorites as FavoritesType } from './__generated__/Favorites_favorites.graphql';
import FavoriteListItem from './FavoriteListItem';

type Props = {
  +favorites: ?FavoritesType,
  +relay: RefetchRelayProp,
};

const FavoritesWrapper = styled.div({
  overflow: 'hidden',
});

const Loader = styled.div({
  position: 'fixed',
  top: '50%',
  right: '50%',
  zIndex: 100,
  backgroundColor: 'rgba(0,0,0,0.1)',
  borderRadius: '6px',
  padding: '8px',
});

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
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const isFirstRender = React.useRef(true);
  const edges = props.favorites?.favorites?.edges ?? [];
  const [isLoading, setIsLoading] = React.useState(false);
  const { values } = useFormikContext();

  const refetch = React.useCallback(
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
  React.useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
    } else {
      refetch(values.sortBy, values.sortDirection);
    }
  }, [values.sortBy, values.sortDirection, refetch]);

  const loadMore = () => {
    setIsLoadingMore(true);
    props.relay.refetch(
      {
        options: {
          sortBy: values.sortBy,
          sortDirection: values.sortDirection,
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

  return (
    <>
      {isLoading && (
        <Loader>
          <Spinner dataTest="tableLoader" />
        </Loader>
      )}
      <Heading>Favorites</Heading>
      {props.favorites == null ? (
        <FavoritesLoader />
      ) : (
        <>
          <Stack flex={true}>
            <Select label="Sort by" name="sortBy" options={sortByOptions} />
            <Select
              label="Direction"
              name="sortDirection"
              options={[
                { label: 'Ascending', value: 'ASC' },
                { label: 'Descending', value: 'DESC' },
              ]}
            />
          </Stack>
          <FavoritesWrapper>
            {edges.map((edge) => (
              <FavoriteListItem favorite={edge?.node} key={edge?.node?.id} />
            ))}
          </FavoritesWrapper>
          {props.favorites?.favorites?.pageInfo.hasNextPage && (
            <Stack justify="center" flex={true}>
              <Button loading={isLoadingMore} onClick={loadMore} color="secondary">
                Load more
              </Button>
            </Stack>
          )}
        </>
      )}
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
): RefetchContainerType<Props, React.Node>);
