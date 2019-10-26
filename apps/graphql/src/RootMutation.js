// @flow

import { GraphQLObjectType } from 'graphql';

import TvhelperMutations from './tvhelper/TvHelperMutations';
import ensureUniqueFields from './services/ensureUniqueFields';
import createdStoredOperations from './mutations/StoredOperation';
import createTrainingjournalUser from './trainingjournal/account/mutations/CreateTrainingjournalUser';

const mutationObjects = [
  TvhelperMutations,
  {
    createdStoredOperations,
    createTrainingjournalUser,
  },
];

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: ensureUniqueFields(mutationObjects),
});
