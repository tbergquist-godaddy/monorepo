// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@kiwicom/graphql-global-id';
import { type GraphqlContextType, RangeDelete } from '@tbergq/graphql-services';
import { FavoritesRepository } from '@tbergq/tvhelper-persistence';

type Args = {|
  +serieId: string,
|};

const failObject = { success: false, id: null };

export default {
  name: 'DeleteFavorite',
  type: RangeDelete,
  description: 'Remove tv show from favorite list',
  args: {
    serieId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: mixed, args: Args, { user }: GraphqlContextType) => {
    const userId = user?.id;
    if (userId == null) {
      return failObject;
    }
    const serieId = fromGlobalId(args.serieId);
    try {
      const success = await FavoritesRepository.deleteFavorite(userId, serieId);
      return {
        success,
        id: args.serieId,
      };
    } catch {
      return failObject;
    }
  },
};
