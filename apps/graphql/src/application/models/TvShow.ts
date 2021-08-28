import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';
import GlobalID from '@adeira/graphql-global-id';
import { isFavoritesResolver } from 'favorite';
import { ITvshowDTO } from 'tvshow';

import TvHelperImage from '../../tvhelper/common/types/output/TvHelperImage';
import Summary from '../../tvhelper/common/types/output/Summary';
import Cast from '../../tvhelper/common/types/output/Cast';
import Episode from './Episode';
import type { GraphqlContextType } from '../../services/createGraphqlContext';
import Network from '../../tvhelper/tvshow/types/output/Network';
import { nodeInterface } from '../../node/node';
import { register } from '../../node/typeStore';

const TvShowEntity: GraphQLObjectType = new GraphQLObjectType<ITvshowDTO, GraphqlContextType>({
  name: 'TvShow',
  description: 'Information about a tv show',
  interfaces: [nodeInterface],
  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    premiered: {
      type: GraphQLDate,
    },
    image: {
      type: TvHelperImage,
    },
    rating: {
      type: GraphQLFloat,
      resolve: ({ rating }: ITvshowDTO) => rating,
    },
    // @ts-ignore: I don't understand this error
    summary: Summary,
    cast: {
      type: GraphQLList(Cast),
      resolve: () => {
        // TODO: Add resolver, unused at the moment AFAIK
        return null;
      },
    },
    episodes: {
      type: GraphQLList(Episode),
      resolve: async ({ id }: ITvshowDTO, _: unknown, { episodeService }) => {
        const episodes = await episodeService.getByTvshowId(id);

        return episodes;
      },
    },
    previousEpisode: {
      type: GraphQLDate,
      resolve: ({ previousEpisode }: ITvshowDTO) => {
        return previousEpisode;
      },
    },
    nextEpisode: {
      type: GraphQLDate,
      resolve: ({ nextEpisode }: ITvshowDTO) => nextEpisode,
    },
    isFavorite: {
      type: GraphQLBoolean,
      resolve: isFavoritesResolver,
    },
    network: {
      type: Network,
    },
  },
});

register<ITvshowDTO | null>('TvShow', TvShowEntity, (id, context) => {
  return context.tvshowService.getById(parseInt(id, 10));
});

export default TvShowEntity;
