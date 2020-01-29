// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { WatchedEpisodeRepository } from '@tbergq/tvhelper-persistence';
import { type OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import EpisodeWatched from '../types/output/EpisodeWatched';

type Args = {
  +episodeId: OpaqueIDString,
  ...
};

export default {
  type: EpisodeWatched,
  description: 'Mark an episode as watched',
  args: {
    episodeId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: mixed, args: Args, { user }: GraphqlContextType) => {
    const userId = user?.id;
    const episodeId = fromGlobalId(args.episodeId);

    if (userId == null) {
      return { success: false, episode: null };
    }
    await WatchedEpisodeRepository.markAsWatched(userId, parseInt(episodeId, 10));

    return { success: true, episode: { id: episodeId, isWatched: true } };
  },
};
