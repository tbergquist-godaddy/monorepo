// @flow

import { GraphQLString, GraphQLNonNull, GraphQLScalarType } from 'graphql';
import { connectionArgs, type ConnectionArguments } from 'graphql-relay';
import { connectionFromArray, type Connection } from '@tbergq/graphql-services';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import type { TvShow as TvShowType } from '../../tvshow/TvShow';
import TvShowConnection from '../../tvshow/types/output/TvShowConnection';

type Args = {
  +query: string,
  ...$Exact<ConnectionArguments>,
  ...
};

export default {
  description: 'Search for tv shows by name',
  type: TvShowConnection,
  args: {
    query: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<GraphQLScalarType>),
    },
    // $FlowFixMe
    ...connectionArgs,
  },
  resolve: async (
    _: mixed,
    args: Args,
    { dataLoader }: GraphqlContextType,
  ): Promise<Connection<TvShowType>> => {
    const tvShows = await dataLoader.tvhelper.searchTvShow.load(args.query);

    return connectionFromArray<TvShowType>(tvShows, args);
  },
};
