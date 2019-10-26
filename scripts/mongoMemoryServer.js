// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';
import { tvHelperConnection } from '@tbergq/tvhelper-persistence';
import { graphqlConnection } from '@tbergq/graphql-persistence';
import { trainingJournalConnection } from '@tbergq/trainingjournal-persistence';

let tvhelperServer;
let graphqlMongoServer;
let tjMongoServer;
const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

beforeAll(async () => {
  tvhelperServer = new MongoMemoryServer();
  const tvhelperUri = await tvhelperServer.getConnectionString();

  graphqlMongoServer = new MongoMemoryServer();
  const graphqlMongoServerUri = await graphqlMongoServer.getConnectionString();

  tjMongoServer = new MongoMemoryServer();
  const tjMongoServerUri = await graphqlMongoServer.getConnectionString();

  await Promise.all([
    tvHelperConnection.openUri(tvhelperUri, opts),
    graphqlConnection.openUri(graphqlMongoServerUri, opts),
    trainingJournalConnection.openUri(tjMongoServerUri, opts),
  ]);
}, 600000);

afterAll(async () => {
  await Promise.all([tvhelperServer.stop(), graphqlMongoServer.stop(), tjMongoServer.stop()]);
}, 5000);
