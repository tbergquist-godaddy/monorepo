import { graphql, useMutation } from 'react-relay';
import { useDeleteFavoriteMutation as MutationType } from '__generated__/useDeleteFavoriteMutation.graphql';

const mutation = graphql`
  mutation useDeleteFavoriteMutation($serieId: ID!) {
    deleteFavorite(serieId: $serieId) {
      success
      id
    }
  }
`;

export default function useDeleteFavorite() {
  return useMutation<MutationType>(mutation);
}
