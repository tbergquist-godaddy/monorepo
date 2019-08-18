// @flow

import { GraphQLObjectType } from 'graphql';
import { TvhelperMutations } from '@tbergq/graphql-tvhelper';

import ensureUniqueFields from './services/ensureUniqueFields';

const mutationObjects = [TvhelperMutations];

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: ensureUniqueFields(mutationObjects),
});
