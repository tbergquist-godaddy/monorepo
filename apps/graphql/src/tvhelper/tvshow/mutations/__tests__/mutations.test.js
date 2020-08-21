// @flow

import { tvHelperConnection, UserRepository } from '@tbergq/tvhelper-persistence';
import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';

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
  generateTestsFromFixtures(
    path.join(__dirname, '__fixtures__'),
    // eslint-disable-next-line no-return-await
    async (input) => await executeTestQuery(input, null, { user: { id: userId } }),
  );
});
