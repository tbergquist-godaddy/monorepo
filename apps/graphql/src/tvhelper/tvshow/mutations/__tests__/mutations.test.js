// @flow

import { tvHelperConnection, UserRepository } from '@tbergq/tvhelper-persistence';
import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/executeTestQuery';

let userId;

describe('AddFavorite', () => {
  beforeEach(async () => {
    const user = await UserRepository.createUser({
      username: 'lol',
      password: 'lol',
      email: 'lol@lol.no',
    });
    userId = user.id;
  }, 600000);

  afterEach(async () => {
    await tvHelperConnection.collection('users').drop();
  });
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input =>
    executeTestQuery(input, null, { user: { id: userId } }),
  );
});
