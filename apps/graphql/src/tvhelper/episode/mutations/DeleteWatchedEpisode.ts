import { GraphQLID, GraphQLNonNull } from 'graphql';
import { deleteWatchedResolver } from 'episode';

import EpisodeWatched from '../types/output/EpisodeWatched';

export default {
  type: EpisodeWatched,
  description: 'Delete an episode as watched',
  args: {
    episodeId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteWatchedResolver,
};
