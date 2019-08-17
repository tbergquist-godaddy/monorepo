// @flow strict

import { graphql as originalGraphQL, GraphQLSchema, GraphQLObjectType } from 'graphql';

type QueriesType = {
  [string]: { ... },
  ...,
};

type ContextType = QueriesType;

export default function generateExecuteTestQuery(queries: QueriesType, context: ContextType) {
  const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Root Query',
    fields: {
      ...queries,
    },
  });

  const schema = new GraphQLSchema({
    query: RootQuery,
  });

  return function executeTestQuery(query: string, variables: ?{ ... }): Promise<{ ... }> {
    return originalGraphQL(schema, query, null, context, variables);
  };
}
