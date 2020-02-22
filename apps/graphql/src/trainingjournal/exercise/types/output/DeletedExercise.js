// @flow

import { GraphQLObjectType, GraphQLBoolean, GraphQLID } from 'graphql';

export default new GraphQLObjectType({
  name: 'DeletedEpisode',
  description: 'Response type for delete episode mutation',
  fields: {
    success: {
      type: GraphQLBoolean,
    },
    exerciseId: {
      type: GraphQLID,
    },
  },
});
