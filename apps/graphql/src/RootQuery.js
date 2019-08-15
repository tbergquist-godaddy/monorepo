// @flow

import { GraphQLObjectType } from 'graphql';
import { SearchTvShow } from '@tbergq/graphql-tvhelper';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    searchTvShow: SearchTvShow,
  },
});
