// @flow

import { IncomingMessage, ServerResponse } from 'http';
import { ApolloServer } from 'apollo-server-micro';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    test: {
      type: GraphQLString,
      resolve: () => 'test',
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

const apolloServer = new ApolloServer({ schema, introspection: true, playground: true });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function graphql(
  req: IncomingMessage,
  res: ServerResponse,
): (req: IncomingMessage, res: ServerResponse) => void {
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
