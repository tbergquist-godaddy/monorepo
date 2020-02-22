// @flow

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';
import GlobalID from '@adeira/graphql-global-id';

import type { TvShow } from '../../TvShow';
import TvHelperImage from '../../../common/types/output/TvHelperImage';
import Summary from '../../../common/types/output/Summary';
import Cast from '../../../common/types/output/Cast';
import Episode from '../../../episode/types/output/Episode';
import { resolvePreviousEpisode, resolveNextEpisode } from '../../resolvers/episodeResolvers';
import type { GraphqlContextType } from '../../../../services/createGraphqlContext';
import Network from './Network';

export default new GraphQLObjectType({
  name: 'TvShow',
  description: 'Information about a tv show',
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
    summary: Summary,
    cast: {
      type: GraphQLList(Cast),
      resolve: ({ _embedded }: TvShow) => _embedded?.cast,
    },
    episodes: {
      type: GraphQLList(Episode),
      resolve: async ({ id, _embedded }: TvShow, _: mixed, { dataLoader }) => {
        const episodes = _embedded?.episodes ?? (await dataLoader.tvhelper.episodes.load(id));

        return episodes;
      },
    },
    previousEpisode: {
      type: GraphQLDate,
      resolve: ({ _embedded, id }: TvShow, _: mixed, { dataLoader }: GraphqlContextType) =>
        _embedded?.previousepisode?.airdate ?? resolvePreviousEpisode(dataLoader, id),
    },
    nextEpisode: {
      type: GraphQLDate,
      resolve: ({ _embedded, id }: TvShow, _: mixed, { dataLoader }: GraphqlContextType) =>
        _embedded?.nextepisode?.airdate ?? resolveNextEpisode(dataLoader, id),
    },
    isFavorite: {
      type: GraphQLBoolean,
      resolve: async (
        { id: serieId }: TvShow,
        _: mixed,
        { user, dataLoader }: GraphqlContextType,
      ) => {
        const userId = user?.id;
        if (userId == null) {
          return null;
        }
        const favorites = await dataLoader.tvhelper.favorites.load(userId);

        return favorites.find(favorite => favorite.serieId === serieId) != null;
      },
    },
    network: {
      type: Network,
    },
  },
});
