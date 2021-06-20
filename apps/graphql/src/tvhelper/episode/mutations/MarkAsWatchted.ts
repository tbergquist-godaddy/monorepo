import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { WatchedEpisodeRepository } from '@tbergq/tvhelper-persistence';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import EpisodeWatched from '../types/output/EpisodeWatched';

type Args = {
  episodeId: string;
};

type Resolver = {
  success: boolean;
  episode: null | { id: string; isWatched: boolean };
};
export default {
  type: EpisodeWatched,
  description: 'Mark an episode as watched',
  args: {
    episodeId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: unknown, args: Args, { user }: GraphqlContextType): Promise<Resolver> => {
    const userId = user?.id;
    const episodeId = fromGlobalId(args.episodeId);

    if (userId == null) {
      return { success: false, episode: null };
    }
    await WatchedEpisodeRepository.markAsWatched(userId, parseInt(episodeId, 10));

    return { success: true, episode: { id: episodeId, isWatched: true } };
  },
};
