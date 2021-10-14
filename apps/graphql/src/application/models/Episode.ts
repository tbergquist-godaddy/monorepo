import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { GraphQLDate } from 'graphql-iso-date';
import { isEpisodeWatchedResolver, IEpisodeDTO, getSeenDateResolver } from 'episode';
import { GraphqlContextType } from 'services/createGraphqlContext';
import ImageSummary from 'application/interfaces/image-summary';

import TvHelperImage from '../../tvhelper/common/types/output/TvHelperImage';
import Summary from '../../tvhelper/common/types/output/Summary';
import TvShow from './TvShow';

export default new GraphQLObjectType<IEpisodeDTO, GraphqlContextType>({
  name: 'Episode',
  description: 'Episodes of the tv show',
  interfaces: [ImageSummary],
  fields: () => ({
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
      resolve: ({ season, number }: IEpisodeDTO) => {
        const paddedSeason = season < 10 ? `0${season}` : season;
        const paddedNumber = number < 10 ? `0${number}` : number;
        return `S${paddedSeason}E${paddedNumber}`;
      },
    },
    airdate: {
      type: GraphQLDate,
      resolve: ({ airdate }: IEpisodeDTO) => airdate || null, // Fails with nullish coalescing maybe date can be emptystring, which is invalid date
    },
    summary: Summary,
    watched: {
      type: GraphQLBoolean,
      resolve: isEpisodeWatchedResolver,
    },

    watchedDate: {
      type: GraphQLDate,
      resolve: getSeenDateResolver,
      description:
        'Note that null does not necessarily mean not seen. The seen date stamp was added at a later stage',
    },

    tvShow: {
      type: TvShow,
      resolve: async (
        { tvshowId }: IEpisodeDTO,
        __: unknown,
        { tvshowService }: GraphqlContextType,
      ) => {
        if (tvshowId == null) {
          return null;
        }
        const show = await tvshowService.getById(tvshowId);
        return show;
      },
    },
  }),
});
