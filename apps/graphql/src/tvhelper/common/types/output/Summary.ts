import { IEpisodeDTO } from 'episode';
import { GraphQLString, GraphQLBoolean, GraphQLFieldConfig } from 'graphql';
import { GraphqlContextType } from 'services/createGraphqlContext';
import striptags from 'striptags';

type Args = {
  stripTags?: boolean;
};

const Summary: GraphQLFieldConfig<IEpisodeDTO, GraphqlContextType, Args> = {
  type: GraphQLString,
  args: {
    stripTags: {
      type: GraphQLBoolean,
      defaultValue: true,
    },
  },
  resolve: ({ summary }: IEpisodeDTO, args: Args): string => {
    if (args.stripTags) {
      return striptags(summary);
    }
    return summary;
  },
};

export default Summary;
