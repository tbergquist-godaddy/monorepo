import { GraphQLString, GraphQLBoolean } from 'graphql';
import striptags from 'striptags';
import { ITvshowDTO } from 'tvshow';

export default {
  type: GraphQLString,
  args: {
    stripTags: {
      type: GraphQLBoolean,
      defaultValue: true,
    },
  },
  resolve: ({ summary }: ITvshowDTO, args: { stripTags: boolean }): string => {
    if (args.stripTags) {
      return striptags(summary);
    }
    return summary;
  },
};
