// @flow strict

import { GraphQLObjectType, GraphQLString } from 'graphql';

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    test: {
      type: GraphQLString,
      resolve: () => 'test',
    },
  },
});

export default RootQuery;
