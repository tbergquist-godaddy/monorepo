import { IEpisodeDTO } from 'episode';
import type { GraphqlContextType } from 'services/createGraphqlContext';

export default function isEpisodeWatchedResolver(
  { id, isWatched }: IEpisodeDTO,
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
