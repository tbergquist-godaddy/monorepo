// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';
import { tvHelperConnection } from '@tbergq/tvhelper-persistence';
import { graphqlConnection } from '@tbergq/graphql-persistence';

let tvhelperServer;
let graphqlMongoServer;
const opts = { useNewUrlParser: true, useCreateIndex: true };

beforeAll(async () => {
  tvhelperServer = new MongoMemoryServer();
  const tvhelperUri = await tvhelperServer.getConnectionString();

  graphqlMongoServer = new MongoMemoryServer();
  const graphqlMongoServerUri = await graphqlMongoServer.getConnectionString();

  await Promise.all([
    tvHelperConnection.openUri(tvhelperUri, opts),
    graphqlConnection.openUri(graphqlMongoServerUri, opts),
  ]);
}, 600000);

afterAll(async () => {
  await Promise.all([tvhelperServer.stop(), graphqlMongoServer.stop()]);
}, 5000);
