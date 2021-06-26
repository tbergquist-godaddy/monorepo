import { GraphQLID, GraphQLNonNull } from 'graphql';
import { markAsWatchedResolver } from 'episode';

import EpisodeWatched from '../types/output/EpisodeWatched';

export default {
  type: EpisodeWatched,
  description: 'Mark an episode as watched',
  args: {
    episodeId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: markAsWatchedResolver,
};
