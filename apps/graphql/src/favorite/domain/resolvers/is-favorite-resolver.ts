import { GraphqlContextType } from 'services/createGraphqlContext';

import { TvShow } from '../../../tvhelper/tvshow/TvShow';

export default function isFavoriteLoader(
  { id: serieId }: TvShow,
  _: unknown,
  { user, favoriteService }: GraphqlContextType,
): Promise<boolean> | null {
  const userId = user?.id;
  if (userId == null) {
    return null;
  }
  return favoriteService.isFavorite(userId, serieId);
}
