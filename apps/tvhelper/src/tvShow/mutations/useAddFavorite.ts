import { graphql, useMutation } from 'react-relay';

const mutation = graphql`
  mutation useAddFavoriteMutation($serieId: ID!) {
    addFavorite(serieId: $serieId) {
      success
      tvShow {
        node {
          id
          isFavorite
        }
      }
    }
  }
`;

export default function useAddFavorite() {
  return useMutation(mutation);
}
