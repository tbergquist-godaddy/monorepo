import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fromGlobalId } from '@adeira/graphql-global-id';
import { IEpisodeDTO } from 'episode';

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
    { episodeService }: GraphqlContextType,
  ): Promise<IEpisodeDTO> => {
    const id = parseInt(fromGlobalId(args.id), 10);
    const episode = await episodeService.getEpisode(id);
    return episode;
  },
};
