// @flow

import { GraphQLObjectType } from 'graphql';
import { TvhelperQueries } from '@tbergq/graphql-tvhelper';

import ensureUniqueFields from './services/ensureUniqueFields';

const queryObjects = [TvhelperQueries];

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: ensureUniqueFields(queryObjects),
});
