// @flow

import { GraphQLObjectType } from 'graphql';

import TvhelperMutations from './tvhelper/TvHelperMutations';
import TrainingJournalMutations from './trainingjournal/trainingJournalMutations';
import createdStoredOperations from './mutations/StoredOperation';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    ...TvhelperMutations,
    ...TrainingJournalMutations,
    createdStoredOperations,
  },
});
