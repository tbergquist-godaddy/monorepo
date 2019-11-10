// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';
import {
  UserRepository,
  tvHelperConnection,
  WatchedEpisodeRepository,
} from '@tbergq/tvhelper-persistence';

import executeTestQuery from '../../../../services/executeTestQuery';

let userId;

describe('episode mutations', () => {
  beforeEach(async () => {
    const user = await UserRepository.createUser({
      password: 'lol',
      username: 'lol',
      email: 'lol',
    });
    userId = user.id;
    await WatchedEpisodeRepository.markAsWatched(user.id, 6);
  });

  afterEach(async () => {
    await tvHelperConnection.collection('users').drop();
    await tvHelperConnection.collection('watchedepisodes').drop();
  });

  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input =>
    executeTestQuery(input, null, { user: { id: userId } }),
  );
});
