// @flow

import { GraphQLObjectType } from 'graphql';

import TvhelperQueries from './tvhelper/TvhelperQueries';
import ensureUniqueFields from './services/ensureUniqueFields';
import Viewer from './common/queries/Viewer';

const queryObjects = [TvhelperQueries, { viewer: Viewer }];

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: ensureUniqueFields(queryObjects),
});
