import { GraphQLID, GraphQLNonNull } from 'graphql';
import { addFavoriteResolver } from 'favorite';

import AddFavorite from '../types/output/AddFavorite';

export default {
  type: AddFavorite,
  description: 'Add tv show to favorite list',
  args: {
    serieId: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: addFavoriteResolver,
};
