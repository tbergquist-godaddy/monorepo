import { GraphQLString, GraphQLNonNull } from 'graphql';
import { connectionArgs } from '@adeira/graphql-relay';
import { connectionFromArray } from '@tbergq/graphql-services';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import TvShowConnection from '../../tvshow/types/output/TvShowConnection';

type Args = {
  query: string;
  [key: string]: any;
};

export default {
  description: 'Search for tv shows by name',
  type: TvShowConnection,
  args: {
    ...connectionArgs,
    query: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_: unknown, args: Args, { dataLoader }: GraphqlContextType): Promise<any> => {
    const tvShows = await dataLoader.tvhelper.searchTvShow.load(args.query);

    return connectionFromArray(tvShows, args);
  },
};
