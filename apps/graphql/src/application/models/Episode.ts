import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { GraphQLDate } from 'graphql-iso-date';
import { isEpisodeWatchedResolver } from 'episode';

import TvHelperImage from '../../tvhelper/common/types/output/TvHelperImage';
import Summary from '../../tvhelper/common/types/output/Summary';
import type { Episode } from '../../tvhelper/episode/Episode';

export default new GraphQLObjectType({
  name: 'Episode',
  description: 'Episodes of the tv show',
  fields: {
    id: GlobalID(({ id }) => id),
    image: {
      type: TvHelperImage,
    },
    name: {
      type: GraphQLString,
    },
    season: {
      type: GraphQLInt,
    },
    number: {
      type: GraphQLInt,
    },
    seasonAndNumber: {
      type: GraphQLString,
      description: 'Gives season and episode number on format S01E01',
      resolve: ({ season, number }: Episode) => {
        const paddedSeason = season < 10 ? `0${season}` : season;
        const paddedNumber = number < 10 ? `0${number}` : number;
        return `S${paddedSeason}E${paddedNumber}`;
      },
    },
    airdate: {
      type: GraphQLDate,
      resolve: ({ airdate }: Episode) => airdate || null, // Failes with nullish coalescing maybe date can be emptystring, which is invalid date
    },
    // @ts-ignore: Unsure
    summary: Summary,
    watched: {
      type: GraphQLBoolean,
      resolve: isEpisodeWatchedResolver,
    },
  },
});
