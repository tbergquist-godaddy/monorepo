// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';

import tvHelperConnection from '../src/connection';

let tvhelperServer;
const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

beforeAll(async () => {
  tvhelperServer = new MongoMemoryServer();
  const tvhelperUri = await tvhelperServer.getUri();

  await tvHelperConnection.openUri(tvhelperUri, opts);
}, 600000);

afterAll(async () => {
  await tvhelperServer.stop();
}, 5000);
