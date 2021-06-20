import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-relay';
import { WatchedEpisodeRepository } from '@tbergq/tvhelper-persistence';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import EpisodeWatched from '../types/output/EpisodeWatched';

type Args = {
  episodeId: string;
};

type WatchedEpisodeResolve = {
  success: boolean;
  episode: { id: string; isWatched: boolean };
};
export default {
  type: EpisodeWatched,
  description: 'Delete an episode as watched',
  args: {
    episodeId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    _: unknown,
    args: Args,
    { user }: GraphqlContextType,
  ): Promise<WatchedEpisodeResolve> => {
    const { id: episodeId } = fromGlobalId(args.episodeId);

    const success = await WatchedEpisodeRepository.deleteWatchedEpisode(
      user?.id,
      parseInt(episodeId, 10),
    );

    return { success, episode: { id: episodeId, isWatched: false } };
  },
};
