// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';

export default new GraphQLObjectType({
  name: 'TraningJournalViewer',
  isTypeOf: value => value === 'trainingjournal',
  fields: {
    id: GlobalID((_: mixed, { user }: GraphqlContextType) => user?.id ?? ''),
    username: {
      type: GraphQLString,
      resolve: (_: mixed, __: mixed, { user }: GraphqlContextType) => {
        return user?.username;
      },
    },
  },
});
