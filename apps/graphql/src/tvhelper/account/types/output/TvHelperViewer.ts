import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { connectionArgs } from '@adeira/graphql-relay';
import * as R from 'ramda';
import { connectionFromArray } from '@tbergq/graphql-services';

import type { GraphqlContextType } from '../../../../services/createGraphqlContext';
import TvShowConnection from '../../../tvshow/types/output/TvShowConnection';
import SortOptions from '../../../tvshow/types/input/SortOptions';

type SortBy =
  | 'name'
  | '_embedded.nextepisode.airdate'
  | '_embedded.previousepisode.airdate'
  | 'status';
type Args = {
  options: {
    sortDirection: 'ascending' | 'descending';
    sortBy: SortBy;
  };
  [key: string]: any;
};

export default new GraphQLObjectType({
  name: 'TvHelperViewer',
  description: 'The viewer object for the current logged in user in tvhelper app',
  isTypeOf: (value) => value === 'tvhelper',
  fields: {
    id: GlobalID((_: unknown, { user }: GraphqlContextType) => user?.id ?? ''),
    username: {
      type: GraphQLString,
      resolve: (_: unknown, __: unknown, { user }: GraphqlContextType) => {
        return user?.username;
      },
    },

    favorites: {
      type: TvShowConnection,
      description: 'Your favorite tv shows',
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
      // @ts-ignore: Oh my
      resolve: async (_: unknown, args: Args, { user, dataLoader }: GraphqlContextType) => {
        const userId = user?.id ?? '';
        const savedFavorites = await dataLoader.tvhelper.favorites.load(userId);

        const serieIds = savedFavorites.map((item) => item.serieId.toString());
        const favorites = await dataLoader.tvhelper.tvDetail.loadMany(serieIds);

        const sortBy =
          args.options.sortDirection === 'ascending'
            ? R.ascend(R.path(args.options.sortBy.split('.')))
            : R.descend(R.path(args.options.sortBy.split('.')));

        return connectionFromArray(R.sort(sortBy, favorites), args);
      },
    },
  },
});
