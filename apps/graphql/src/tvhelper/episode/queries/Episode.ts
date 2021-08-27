import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import Episode from '../../../application/models/Episode';

type Args = {
  id: string;
};

export default {
  description: 'Load episode by id',
  type: Episode,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    _: unknown,
    args: Args,
    { dataLoader }: GraphqlContextType,
  ): Promise<{
    airdate: Date;
    id: number;
    image: { medium: string; original: string };
    isWatched?: boolean;
    name: string;
    number: number;
    season: number;
    summary: string;
  }> => {
    const id = fromGlobalId(args.id);
    const episode = await dataLoader.tvhelper.episode.load(id);
    return episode;
  },
};
