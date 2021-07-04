import { GraphqlContextType } from 'services/createGraphqlContext';
import { ITvshowDTO } from 'tvshow';

export default function isFavoriteLoader(
  { id: serieId }: ITvshowDTO,
  _: unknown,
  { user, favoriteService }: GraphqlContextType,
): Promise<boolean> | null {
  const userId = user?.id;
  if (userId == null) {
    return null;
  }
  return favoriteService.isFavorite(userId, serieId);
}
