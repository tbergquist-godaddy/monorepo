import { GraphQLBoolean, GraphQLInterfaceType, GraphQLString } from 'graphql';

import TvHelperImage from '../../tvhelper/common/types/output/TvHelperImage';

const ImageSummary = new GraphQLInterfaceType({
  name: 'ImageSummary',
  fields: {
    image: {
      type: TvHelperImage,
    },
    summary: {
      type: GraphQLString,
      args: {
        stripTags: {
          type: GraphQLBoolean,
          defaultValue: true,
        },
      },
    },
  },
});

export default ImageSummary;
