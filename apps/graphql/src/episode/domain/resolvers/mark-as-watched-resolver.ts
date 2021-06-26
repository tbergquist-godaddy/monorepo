import { fromGlobalId } from '@adeira/graphql-global-id';
import { GraphqlContextType } from 'services/createGraphqlContext';

type Args = {
  episodeId: string;
};

type Resolver = {
  success: boolean;
  episode: null | { id: string; isWatched: boolean };
};

export default async function markAsWatchedResolver(
  _: unknown,
  args: Args,
  { user, watchedEpisodeService }: GraphqlContextType,
): Promise<Resolver> {
  const userId = user?.id;
  const episodeId = fromGlobalId(args.episodeId);
  const failedObject = { success: false, episode: null };
  if (userId == null) {
    return failedObject;
  }
  const result = await watchedEpisodeService.addWatchedEpisode(userId, parseInt(episodeId, 10));

  if (result == null) {
    return failedObject;
  }
  return { success: true, episode: { id: episodeId, isWatched: true } };
}
