// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@kiwicom/graphql-global-id';
import type { GraphqlContextType } from '@tbergq/graphql-services';
import { FavoritesRepository } from '@tbergq/tvhelper-persistence';

import AddFavorite from '../types/output/AddFavorite';

type Args = {|
  +serieId: string,
|};

export default {
  name: 'AddFavorite',
  type: AddFavorite,
  description: 'Add tv show to favorite list',
  args: {
    serieId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: mixed, args: Args, { user, dataLoader }: GraphqlContextType) => {
    const serieId = fromGlobalId(args.serieId);
    const userId = user?.id;
    if (userId == null) {
      return { success: false, tvShow: null };
    }
    const serie = await FavoritesRepository.createFavorite(userId, serieId);
    const tvShow = await dataLoader.tvhelper.tvDetail.load(serie.serieId);

    return {
      success: true,
      tvShow,
    };
  },
};
