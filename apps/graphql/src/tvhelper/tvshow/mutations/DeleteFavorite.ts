import { GraphQLID, GraphQLNonNull } from 'graphql';
import RangeDelete from 'application/models/range-delete';
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
