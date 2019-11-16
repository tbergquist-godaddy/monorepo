// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';

type Ancestor = {|
  +medium: string,
  +original: string,
|};

export default new GraphQLObjectType({
  name: 'TvHelperImage',
  fields: {
    id: GlobalID(({ original }: Ancestor) => original),
    original: {
      type: GraphQLString,
    },
    medium: {
      type: GraphQLString,
    },
  },
});
