// @flow strict-local

import { GraphQLObjectType } from 'graphql';

import viewer from './account/queries/Viewer';

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    viewer,
  },
});

export default RootQuery;
