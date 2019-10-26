// @flow

import { GraphQLObjectType } from 'graphql';

import TvhelperMutations from './tvhelper/TvHelperMutations';
import TrainingJournalMutations from './trainingjournal/trainingJournalMutations';
import ensureUniqueFields from './services/ensureUniqueFields';
import createdStoredOperations from './mutations/StoredOperation';

const mutationObjects = [
  TvhelperMutations,
  TrainingJournalMutations,
  {
    createdStoredOperations,
  },
];

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: ensureUniqueFields(mutationObjects),
});
