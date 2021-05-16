import { graphql, useLazyLoadQuery } from 'react-relay';
import { Formik } from 'formik';
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

const noop = () => {};

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
        <Formik
          onSubmit={noop}
          initialValues={{ sortBy: 'PREVIOUS_EPISODE', sortDirection: 'DESC' }}
        >
          <Favorites favorites={data?.viewer} />
        </Formik>
      </Box>
    </Container>
  );
}
