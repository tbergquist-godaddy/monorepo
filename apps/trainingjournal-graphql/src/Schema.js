// @flow strict-local

import { GraphQLSchema } from 'graphql';

import RootQuery from './RootQuery';

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
