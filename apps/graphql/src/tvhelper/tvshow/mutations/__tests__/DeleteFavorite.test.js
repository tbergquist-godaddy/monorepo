// @flow

import {
  tvHelperConnection,
  UserRepository,
  FavoritesRepository,
} from '@tbergq/tvhelper-persistence';

import executeTestQuery from '../../../../services/executeTestQuery';

let createdUserId;

describe('DeleteFavorite', () => {
  beforeEach(async () => {
    const user = await UserRepository.createUser({
      username: 'lol',
      password: 'lol',
      email: 'lol@lol.no',
    });
    createdUserId = user.id;
    await FavoritesRepository.createFavorite(createdUserId, '6');
  });

  afterEach(async () => {
    await tvHelperConnection.collection('users').drop();
    await tvHelperConnection.collection('favorites').drop();
  });

  it('returns success false for wrong user', async () => {
    const res = await await executeTestQuery(
      `mutation deleteFavorite {
      deleteFavorite(serieId: "dHZzaG93OjY=") {
        success
      }
    }`,
      null,
      { user: { id: 'fail' } },
    );
    expect(res.data.deleteFavorite.success).toBe(false);
  });

  it('returns success false for wrong serieId', async () => {
    const res = await await executeTestQuery(
      `mutation deleteFavorite {
      deleteFavorite(serieId: "dHZzaG93OjY2") {
        success
      }
    }`,
      null,
      { user: { id: createdUserId } },
    );
    expect(res.data.deleteFavorite.success).toBe(false);
  });

  it('works with existing favorite', async () => {
    const res = await executeTestQuery(
      `mutation deleteFavorite {
      deleteFavorite(serieId: "dHZzaG93OjY=") {
        success
        id
      }
    }`,
      null,
      { user: { id: createdUserId } },
    );
    expect(res).toMatchSnapshot();
  });
});
