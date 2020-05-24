// @flow

import { IncomingMessage, ServerResponse } from 'http';
import { ApolloServer } from 'apollo-server-micro';
import { alliImporterConnection } from '@tbergq/alli-importer-persistence';
import { config as loadEnv } from 'dotenv';
import { invariant } from '@adeira/js';
import { schema } from '@tbergq/alli-importer-graphql';

loadEnv();

const apolloServer = new ApolloServer({ schema, introspection: true, playground: true });

const { DB_URL } = process.env;

invariant(DB_URL != null, 'Expected to have a DB_URL, but it was undefined');

alliImporterConnection.openUri(DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

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
