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

import type { TvShow } from '../../TvShow';
import TvHelperImage from '../../../common/types/output/TvHelperImage';
import Summary from '../../../common/types/output/Summary';
import Cast from '../../../common/types/output/Cast';
import Episode from '../../../episode/types/output/Episode';
import { resolvePreviousEpisode, resolveNextEpisode } from '../../resolvers/episodeResolvers';
import type { GraphqlContextType } from '../../../../services/createGraphqlContext';
import Network from './Network';
import { nodeInterface } from '../../../../node/node';
import { register } from '../../../../node/typeStore';

const TvShowEntity: GraphQLObjectType = new GraphQLObjectType({
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
      resolve: ({ rating }: TvShow) => rating.average,
    },
    // @ts-ignore: Ok
    summary: Summary,
    cast: {
      type: GraphQLList(Cast),
      resolve: ({ _embedded }: TvShow) => _embedded?.cast,
    },
    episodes: {
      type: GraphQLList(Episode),
      resolve: async ({ id, _embedded }: TvShow, _: unknown, { dataLoader }) => {
        const episodes =
          _embedded?.episodes ?? (await dataLoader.tvhelper.episodes.load(id.toString()));

        return episodes;
      },
    },
    previousEpisode: {
      type: GraphQLDate,
      resolve: ({ _embedded, id }: TvShow, _: unknown, { dataLoader }: GraphqlContextType) =>
        // @ts-ignore: What, this is the same type
        _embedded?.previousepisode?.airdate ?? resolvePreviousEpisode(dataLoader, id),
    },
    nextEpisode: {
      type: GraphQLDate,
      resolve: ({ _embedded, id }: TvShow, _: unknown, { dataLoader }: GraphqlContextType) =>
        // @ts-ignore: What, this is the same type
        _embedded?.nextepisode?.airdate ?? resolveNextEpisode(dataLoader, id),
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

register('TvShow', TvShowEntity, (id, context) => {
  return context.dataLoader.tvhelper.tvDetail.load(id);
});

export default TvShowEntity;
