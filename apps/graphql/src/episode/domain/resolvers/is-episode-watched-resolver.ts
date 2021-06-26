import type { GraphqlContextType } from 'services/createGraphqlContext';

import { Episode } from '../../../tvhelper/episode/Episode';

export default function isEpisodeWatchedResolver(
  { id, isWatched }: Episode,
  _: unknown,
  { user, watchedEpisodeService }: GraphqlContextType,
): Promise<boolean> | boolean {
  const userId = user?.id;
  if (userId == null) {
    return false;
  }
  if (isWatched != null) {
    return isWatched;
  }
  return watchedEpisodeService.isEpisodeWatched(id);
}
