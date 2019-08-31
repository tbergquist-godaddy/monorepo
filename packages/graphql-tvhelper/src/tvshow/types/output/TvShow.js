// @flow

import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';
import type { TvShow, GraphqlContextType } from '@tbergq/graphql-services';
import GlobalID from '@kiwicom/graphql-global-id';

import TvHelperImage from '../../../common/types/output/TvHelperImage';
import Summary from './Summary';
import Cast from '../../../common/types/output/Cast';
import Episode from './Episode';
import { resolvePreviousEpisode, resolveNextEpisode } from '../../resolvers/episodeResolvers';

export default new GraphQLObjectType({
  name: 'TvShow',
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
  },
});
