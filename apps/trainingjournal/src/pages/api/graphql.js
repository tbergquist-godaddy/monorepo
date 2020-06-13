// @flow

import { IncomingMessage, ServerResponse } from 'http';
import { ApolloServer } from 'apollo-server-micro';
import { config as loadEnv } from 'dotenv';
import { schema } from '@tbergq/trainingjournal-graphql';

loadEnv();

const apolloServer = new ApolloServer({ schema, introspection: __DEV__, playground: __DEV__ });

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
