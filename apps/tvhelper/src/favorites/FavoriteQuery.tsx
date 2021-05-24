import { graphql, useLazyLoadQuery } from 'react-relay';
import { FavoriteQuery as FavoritesType } from '__generated__/FavoriteQuery.graphql';
import { Container } from '@tbergq/components';
import Box from 'components/Box';

import Favorites from './Favorites';

export const favoritesQuery = graphql`
  query FavoriteQuery($options: SortOptions) {
    viewer {
      ...Favorites_favorites @arguments(options: $options)
    }
  }
`;

export default function FavoriteQuery() {
  const data = useLazyLoadQuery<FavoritesType>(
    favoritesQuery,
    {
      options: { sortDirection: 'DESC', sortBy: 'PREVIOUS_EPISODE' },
    },
    { fetchPolicy: 'store-or-network' },
  );

  return (
    <Container>
      <Box pt={8}>
        <Favorites favorites={data?.viewer} />
      </Box>
    </Container>
  );
}
