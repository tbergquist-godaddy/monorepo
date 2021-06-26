import { fromGlobalId } from '@adeira/graphql-relay';
import { GraphqlContextType } from 'services/createGraphqlContext';

type Args = {
  episodeId: string;
};

type WatchedEpisodeResolve = {
  success: boolean;
  episode: { id: string; isWatched: boolean } | null;
};

export default async function deleteWatchedResolver(
  _: unknown,
  args: Args,
  { user, watchedEpisodeService }: GraphqlContextType,
): Promise<WatchedEpisodeResolve> {
  const { id: episodeId } = fromGlobalId(args.episodeId);
  const failObject = { success: false, episode: null };
  const userId = user?.id;
  if (userId == null) {
    return failObject;
  }
  const success = await watchedEpisodeService.deleteWatchedEpisode(parseInt(episodeId, 10));

  if (!success) {
    return failObject;
  }
  return { success, episode: { id: episodeId, isWatched: false } };
}
