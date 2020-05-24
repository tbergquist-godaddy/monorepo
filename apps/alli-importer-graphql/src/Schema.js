// @flow strict-local

import { GraphQLSchema } from 'graphql';

import RootQuery from './RootQuery';
import RootMutation from './RootMutation';

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default schema;
