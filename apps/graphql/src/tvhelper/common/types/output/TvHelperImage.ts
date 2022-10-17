import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { GraphqlContextType } from 'services/createGraphqlContext';

type Ancestor =
  | {
      medium: string;
      original: string;
    }
  | string;

const resolveImage = async (ancestor: Ancestor, callback: (path: string) => Promise<string>) => {
  console.log({ ancestor });
  if (typeof ancestor === 'string') {
    const res = await callback(ancestor);
    console.log({ res });
    return res;
  }
  return ancestor;
};
export default new GraphQLObjectType({
  name: 'TvHelperImage',
  description: 'The image of a person or tvshow or episode',
  fields: {
    id: GlobalID((ancestor: Ancestor) =>
      typeof ancestor === 'string' ? ancestor : ancestor.original,
    ),
    original: {
      type: GraphQLString,
      resolve: (ancestor: Ancestor, _: unknown, { imageService }: GraphqlContextType) => {
        return resolveImage(ancestor, (path: string) => {
          return imageService.getOriginalImage(path);
        });
      },
    },
    medium: {
      type: GraphQLString,
      resolve: (ancestor: Ancestor, _: unknown, { imageService }: GraphqlContextType) => {
        return resolveImage(ancestor, (path: string) => {
          return imageService.getMediumImage(path);
        });
      },
    },
  },
});
