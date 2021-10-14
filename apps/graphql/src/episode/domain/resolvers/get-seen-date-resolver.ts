import { IEpisodeDTO } from 'episode';
import type { GraphqlContextType } from 'services/createGraphqlContext';
import { Maybe } from 'types';

export default async function getEpisodeWatchedResolver(
  { id }: IEpisodeDTO,
  _: unknown,
  { user, watchedEpisodeService }: GraphqlContextType,
): Promise<Maybe<Date>> {
  const userId = user?.id;
  if (userId == null) {
    return null;
  }

  const episode = await watchedEpisodeService.getWatchedEpisode(id);
  return episode?.date;
}
