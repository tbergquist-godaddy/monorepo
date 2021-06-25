import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { connectionArgs } from '@adeira/graphql-relay';
import { favoritesResolver } from 'favorite';
import { GraphqlContextType } from 'services/createGraphqlContext';

import TvShowConnection from '../../../tvshow/types/output/TvShowConnection';
import SortOptions from '../../../tvshow/types/input/SortOptions';

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
      resolve: favoritesResolver,
    },
  },
});
