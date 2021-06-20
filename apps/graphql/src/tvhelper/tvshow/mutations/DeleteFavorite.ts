import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { FavoritesRepository } from '@tbergq/tvhelper-persistence';
import { RangeDelete } from '@tbergq/graphql-services';
import { GraphqlContextType } from 'services/createGraphqlContext';

type Args = {
  serieId: string;
};

const failObject = { success: false, id: null };

type Resolver = {
  success: boolean;
  id: string | null;
};

export default {
  type: RangeDelete,
  description: 'Remove tv show from favorite list',
  args: {
    serieId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: unknown, args: Args, { user }: GraphqlContextType): Promise<Resolver> => {
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
