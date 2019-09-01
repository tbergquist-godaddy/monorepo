// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@kiwicom/graphql-global-id';
import type { GraphqlContextType } from '@tbergq/graphql-services';
import { WatchedEpisodeRepository } from '@tbergq/tvhelper-persistence';

import EpisodeWatched from '../types/output/EpisodeWatched';

type Args = {|
  +episodeId: string,
|};

export default {
  name: 'MarkAsWatched',
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
    await WatchedEpisodeRepository.markAsWatched(userId, episodeId);

    return { success: true, episode: { id: episodeId, isWatched: true } };
  },
};
