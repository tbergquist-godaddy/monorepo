// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';
import { generateExecuteTestQuery } from '@tbergq/graphql-services';
import { tvHelperConnection } from '@tbergq/tvhelper-persistence';

import Mutations from '../../../../TvHelperMutations';
import getDataloaders from '../../../../getDataloaders';

let mongoServer;
const opts = { useNewUrlParser: true, useCreateIndex: true };
const context = {
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};

const executeTestQuery = generateExecuteTestQuery(null, Mutations, context);

describe('CreateUser', () => {
  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const uri = await mongoServer.getConnectionString();

    await tvHelperConnection.openUri(uri, opts);
  }, 600000);

  afterAll(async () => {
    await mongoServer.stop();
  }, 5000);

  it('works', async () => {
    const res = await executeTestQuery(`
    mutation createUser {
      createUser(username: "lol", password:"lol", email: "lol@lol.lol") {
        success
      }
    }
    `);
    expect(res).toMatchSnapshot();
  });
});
