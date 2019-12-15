// @flow

import { GraphQLObjectType, GraphQLBoolean, GraphQLID } from 'graphql';

export default new GraphQLObjectType({
  name: 'DeletedEpisode',
  fields: {
    success: {
      type: GraphQLBoolean,
    },
    exerciseId: {
      type: GraphQLID,
    },
  },
});
