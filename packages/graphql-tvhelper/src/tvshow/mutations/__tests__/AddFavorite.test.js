// @flow

import { generateExecuteTestQuery } from '@tbergq/graphql-services';
import { tvHelperConnection, UserRepository } from '@tbergq/tvhelper-persistence';

import Mutations from '../../../../TvHelperMutations';
import getDataloaders from '../../../../getDataloaders';

const context = {
  user: { id: '123' },
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};

const executeTestQuery = generateExecuteTestQuery(null, Mutations, context);

describe('AddFavorite', () => {
  beforeEach(async () => {
    const user = await UserRepository.createUser({
      username: 'lol',
      password: 'lol',
      email: 'lol@lol.no',
    });
    context.user.id = user.id;
  }, 600000);

  afterEach(async () => {
    await tvHelperConnection.collection('users').drop();
  });

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
