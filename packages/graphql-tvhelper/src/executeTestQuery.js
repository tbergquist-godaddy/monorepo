// @flow

import { graphql as originalGraphQL, GraphQLSchema, GraphQLObjectType } from 'graphql';

import SearchTvShow from './search/queries/SearchTvShow';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    searchTvShow: SearchTvShow,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

/**
 * Executes GraphQL query using our schema. This function should
 * be used only during testing because it uses faked context.
 */
export default function executeTestQuery(
  query: string,
  variables: ?{ ... },
  context: ?{ ... },
): Promise<Object> {
  return originalGraphQL(schema, query, null, context, variables);
}
