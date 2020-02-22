// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';

export default new GraphQLObjectType({
  name: 'CreateTrainingJournalUser',
  description: 'Return type for the create user mutation',
  fields: {
    id: GlobalID(({ id }) => id),
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
  },
});
