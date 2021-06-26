import { GraphQLID, GraphQLNonNull } from 'graphql';
import { RangeDelete } from '@tbergq/graphql-services';
import { deleteFavoriteResolver } from 'favorite';

export default {
  type: RangeDelete,
  description: 'Remove tv show from favorite list',
  args: {
    serieId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteFavoriteResolver,
};
