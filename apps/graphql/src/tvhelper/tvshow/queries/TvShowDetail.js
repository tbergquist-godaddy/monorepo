// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@kiwicom/graphql-global-id';

import { type GraphqlContextType } from '../../../services/createGraphqlContext';
import TvShow from '../types/output/TvShow';

type Args = {|
  +id: string,
|};

export default {
  name: 'tvShowDetail',
  description: 'Tv show lookup by id',
  type: TvShow,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: mixed, args: Args, { dataLoader }: GraphqlContextType) => {
    const id = fromGlobalId(args.id);
    const tvShow = await dataLoader.tvhelper.tvDetail.load(id);
    return tvShow;
  },
};
