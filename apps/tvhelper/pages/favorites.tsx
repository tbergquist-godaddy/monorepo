import FavoriteQuery, { favoritesQuery } from 'favorites/FavoriteQuery';
import makeGetServerSideProps from 'services/get-serverside-props';

export default function Favorites() {
  return <FavoriteQuery />;
}

export const getServerSideProps = makeGetServerSideProps({
  relayQueryData: {
    query: favoritesQuery,
    variables: { options: { sortDirection: 'DESC', sortBy: 'PREVIOUS_EPISODE' } },
  },
  pageName: 'favorites',
  isSecure: true,
});
