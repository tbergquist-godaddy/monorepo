// @flow

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';
import { GraphQLDate } from 'graphql-iso-date';
import type { Episode } from '@tbergq/graphql-services';

import TvHelperImage from '../../../common/types/output/TvHelperImage';
import Summary from './Summary';

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
    summary: Summary,
  },
});
