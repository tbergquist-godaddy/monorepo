// @flow

import { GraphQLObjectType } from 'graphql';

import TvhelperQueries from './tvhelper/TvhelperQueries';
import viewer from './common/queries/Viewer';
import { nodeField } from './node/node';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    ...TvhelperQueries,
    viewer,
    node: nodeField,
  },
});
