// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { type OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

import { type GraphqlContextType } from '../../../services/createGraphqlContext';
import TvShow from '../types/output/TvShow';

type Args = {
  +id: OpaqueIDString,
  ...
};

export default {
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
