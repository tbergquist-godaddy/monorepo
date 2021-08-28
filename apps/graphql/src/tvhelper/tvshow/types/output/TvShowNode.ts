// @flow

import { GraphQLObjectType } from 'graphql';

import TvShow from '../../../../application/models/TvShow';

export default new GraphQLObjectType({
  name: 'TvShowNode',
  description: 'A tv show node',
  fields: {
    node: {
      type: TvShow,
      resolve: (ancestor) => ancestor,
    },
  },
});
