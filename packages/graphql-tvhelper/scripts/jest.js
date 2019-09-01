// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';
import { tvHelperConnection } from '@tbergq/tvhelper-persistence';

let mongoServer;
const opts = { useNewUrlParser: true, useCreateIndex: true };

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const uri = await mongoServer.getConnectionString();

  await tvHelperConnection.openUri(uri, opts);
}, 600000);

afterAll(async () => {
  await mongoServer.stop();
}, 5000);
