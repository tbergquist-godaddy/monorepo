import { GraphQLString, GraphQLNonNull } from 'graphql';
import { connectionArgs } from '@adeira/graphql-relay';
import { searchTvshowResolver } from 'tvshow';

import TvShowConnection from '../../tvshow/types/output/TvShowConnection';

export default {
  description: 'Search for tv shows by name',
  type: TvShowConnection,
  args: {
    ...connectionArgs,
    query: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: searchTvshowResolver,
};
