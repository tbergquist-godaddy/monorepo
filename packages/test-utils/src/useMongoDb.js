// @flow

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default function useMongoDb() {
  // eslint-disable-next-line no-console
  console.log('Please refactor, this most likey does not work');
  let mongoServer;
  const opts = { useNewUrlParser: true };

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    await mongoose.connect(mongoUri, opts);
  }, 600000);

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  }, 600000);
}
