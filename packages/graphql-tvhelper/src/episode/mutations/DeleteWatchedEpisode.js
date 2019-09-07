// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from 'graphql-relay';
import { WatchedEpisodeRepository } from '@tbergq/tvhelper-persistence';
import type { GraphqlContextType } from '@tbergq/graphql-services';

import EpisodeWatched from '../types/output/EpisodeWatched';

type Args = {|
  +episodeId: string,
|};

export default {
  name: 'DeleteWatchedEpisode',
  type: EpisodeWatched,
  description: 'Delete an episode as watched',
  args: {
    episodeId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: mixed, args: Args, { user }: GraphqlContextType) => {
    const { id: episodeId } = fromGlobalId(args.episodeId);

    const success = await WatchedEpisodeRepository.deleteWatchedEpisode(
      user?.id,
      parseInt(episodeId, 10),
    );

    return { success, episode: { id: episodeId, isWatched: false } };
  },
};
