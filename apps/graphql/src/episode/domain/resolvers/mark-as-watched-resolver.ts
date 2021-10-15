import { fromGlobalId } from '@adeira/graphql-global-id';
import { IEpisodeDTO } from 'episode';
import { GraphqlContextType } from 'services/createGraphqlContext';

type Args = {
  episodeId: string;
};

type Resolver = {
  success: boolean;
  episode: null | { id: string; isWatched: boolean } | IEpisodeDTO;
};

export default async function markAsWatchedResolver(
  _: unknown,
  args: Args,
  { user, watchedEpisodeService, episodeService }: GraphqlContextType,
): Promise<Resolver> {
  const userId = user?.id;
  const episodeId = parseInt(fromGlobalId(args.episodeId), 10);
  const failedObject = { success: false, episode: null };
  if (userId == null) {
    return failedObject;
  }

  const watchedEpisode = await watchedEpisodeService.addWatchedEpisode(episodeId);

  if (watchedEpisode == null) {
    return failedObject;
  }
  const episode = await episodeService.getEpisode(episodeId);
  return {
    success: true,
    episode,
  };
}
