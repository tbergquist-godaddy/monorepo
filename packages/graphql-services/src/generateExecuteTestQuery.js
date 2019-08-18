// @flow strict

import {
  graphql as originalGraphQL,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

type QueriesType = {
  [string]: { ... },
  ...,
};

type MutationType = QueriesType;
type ContextType = QueriesType;

const DummyQuery = {
  dummy: {
    name: 'dummy',
    type: GraphQLString,
    resolve: () => 'lol',
  },
};

export default function generateExecuteTestQuery(
  queries: ?QueriesType,
  mutations: ?MutationType,
  context: ContextType,
) {
  const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Root Query',
    fields: {
      ...(queries ?? DummyQuery),
    },
  });
  const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    description: 'Root Mutation',
    fields: {
      ...(mutations ?? {}),
    },
  });

  const schema = new GraphQLSchema({
    query: RootQuery,
    ...(mutations ? { mutation: RootMutation } : {}),
  });

  return function executeTestQuery(query: string, variables: ?{ ... }): Promise<{ ... }> {
    return originalGraphQL(schema, query, null, context, variables);
  };
}
