// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';

import connection from '../src/db/connection';

let server;
const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

beforeAll(async () => {
  server = new MongoMemoryServer();
  const uri = await server.getConnectionString();

  await connection.openUri(uri, opts);
}, 600000);

afterAll(async () => {
  await server.stop();
}, 5000);
