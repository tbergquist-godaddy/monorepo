// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';
import { tvHelperConnection } from '@tbergq/tvhelper-persistence';
import { graphqlConnection } from '@tbergq/graphql-persistence';

import server from '../test/server';

let tvhelperServer;
let graphqlMongoServer;
const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

beforeAll(async () => {
  server.listen();
  tvhelperServer = new MongoMemoryServer();
  const tvhelperUri = await tvhelperServer.getConnectionString();

  graphqlMongoServer = new MongoMemoryServer();
  const graphqlMongoServerUri = await graphqlMongoServer.getConnectionString();

  await Promise.all([
    tvHelperConnection.openUri(tvhelperUri, opts),
    graphqlConnection.openUri(graphqlMongoServerUri, opts),
  ]);
}, 600000);

afterEach(() => server.resetHandlers());

afterAll(async () => {
  await server.close();
  await Promise.all([tvhelperServer.stop(), graphqlMongoServer.stop()]);
}, 5000);
