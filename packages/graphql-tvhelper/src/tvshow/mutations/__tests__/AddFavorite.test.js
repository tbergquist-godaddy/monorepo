// @flow

import { MongoMemoryServer } from 'mongodb-memory-server';
import { generateExecuteTestQuery } from '@tbergq/graphql-services';
import { tvHelperConnection, UserRepository } from '@tbergq/tvhelper-persistence';

import Mutations from '../../../../TvHelperMutations';
import getDataloaders from '../../../../getDataloaders';

let mongoServer;
const opts = { useNewUrlParser: true, useCreateIndex: true };
const context = {
  user: { id: '123' },
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};

const executeTestQuery = generateExecuteTestQuery(null, Mutations, context);

describe('lol', () => {
  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const uri = await mongoServer.getConnectionString();

    await tvHelperConnection.openUri(uri, opts);
    const user = await UserRepository.createUser({
      username: 'lol',
      password: 'lol',
      email: 'lol@lol.no',
    });
    context.user.id = user.id;
  }, 600000);

  afterAll(async () => {
    await mongoServer.stop();
  }, 5000);

  it('works', async () => {
    const res = await executeTestQuery(`mutation addFavorite {
      addFavorite(serieId: "dHZzaG93OjY=") {
        success
        tvShow {
          node {
            name
            status
          }
        }
      }
    }`);
    expect(res).toMatchSnapshot();
  });
});
