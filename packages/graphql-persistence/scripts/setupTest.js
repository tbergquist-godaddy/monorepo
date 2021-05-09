// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';

import graphqlConnection from '../src/connection';

let graphqlMongoServer;
const opts = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

beforeAll(async () => {
  graphqlMongoServer = new MongoMemoryServer();
  const graphqlMongoServerUri = await graphqlMongoServer.getUri();

  await graphqlConnection.openUri(graphqlMongoServerUri, opts);
}, 600000);

afterAll(async () => {
  await graphqlMongoServer.stop();
}, 5000);
