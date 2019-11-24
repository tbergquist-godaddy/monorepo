// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';

export default new GraphQLObjectType({
  name: 'Exericse',
  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },
    videoUrl: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    muscleGroups: {
      type: GraphQLString,
    },
  },
});
