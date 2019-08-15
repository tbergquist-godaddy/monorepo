// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    searchTvShow: {
      name: 'SearchTvShow',
      description: 'Search for tv shows by name',
      type: GraphQLString,
      resolve: () => {
        return 'hello';
      },
    },
  },
});
