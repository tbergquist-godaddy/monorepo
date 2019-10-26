// @flow

import { connectionFromArray, connectionArgs, type ConnectionArguments } from 'graphql-relay';
import * as R from 'ramda';

import type { TvShow as TvShowType } from '../TvShow';
import TvShowConnection from '../types/output/TvShowConnection';
import SortOptions from '../types/input/SortOptions';
import type { GraphqlContextType } from '../../../services/createGraphqlContext';

type SortBy =
  | 'name'
  | '_embedded.nextepisode.airdate'
  | '_embedded.previousepisode.airdate'
  | 'status';
type Args = {|
  +options: {|
    +sortDirection: 'ascending' | 'descending',
    +sortBy: SortBy,
  |},
  ...$Exact<ConnectionArguments>,
|};

export default {
  name: 'Favorites',
  type: TvShowConnection,
  description: 'Get your favorites',
  args: {
    ...connectionArgs,
    options: {
      type: SortOptions,
      defaultValue: {
        sortDirection: 'ascending',
        sortBy: 'name',
      },
    },
  },
  resolve: async (_: mixed, args: Args, { user, dataLoader }: GraphqlContextType) => {
    const userId = user?.id;
    if (userId == null) {
      return null;
    }
    const savedFavorites = await dataLoader.tvhelper.favorites.load(userId);

    const serieIds = savedFavorites.map(item => item.serieId.toString());
    const favorites = await dataLoader.tvhelper.tvDetail.loadMany(serieIds);

    const sortBy =
      args.options.sortDirection === 'ascending'
        ? R.ascend(R.path(args.options.sortBy.split('.')))
        : R.descend(R.path(args.options.sortBy.split('.')));

    return connectionFromArray<TvShowType>(R.sort(sortBy, favorites), args);
  },
};
