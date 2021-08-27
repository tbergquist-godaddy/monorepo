import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

import Episode from '../../../../application/models/Episode';

export default new GraphQLObjectType({
  name: 'EpisodeWatched',
  description: 'Mutation response type for episode watched mutation',
  fields: {
    success: {
      type: GraphQLBoolean,
    },
    episode: {
      type: Episode,
    },
  },
});
