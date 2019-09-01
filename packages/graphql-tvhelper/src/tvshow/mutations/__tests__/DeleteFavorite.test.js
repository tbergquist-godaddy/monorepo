// @flow

import { generateExecuteTestQuery } from '@tbergq/graphql-services';
import {
  tvHelperConnection,
  UserRepository,
  FavoritesRepository,
} from '@tbergq/tvhelper-persistence';

import Mutations from '../../../../TvHelperMutations';
import getDataloaders from '../../../../getDataloaders';

let createdUserId;
const context = {
  user: { id: '123' },
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};

const executeTestQuery = generateExecuteTestQuery(null, Mutations, context);

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
    context.user.id = 'fail';
    const res = await await executeTestQuery(`mutation deleteFavorite {
      deleteFavorite(serieId: "dHZzaG93OjY=") {
        success
      }
    }`);
    expect(res.data.deleteFavorite.success).toBe(false);
  });

  it('returns success false for wrong serieId', async () => {
    context.user.id = createdUserId;
    const res = await await executeTestQuery(`mutation deleteFavorite {
      deleteFavorite(serieId: "dHZzaG93OjY2") {
        success
      }
    }`);
    expect(res.data.deleteFavorite.success).toBe(false);
  });

  it('works with existing favorite', async () => {
    context.user.id = createdUserId;
    const res = await executeTestQuery(`mutation deleteFavorite {
      deleteFavorite(serieId: "dHZzaG93OjY=") {
        success
        id
      }
    }`);
    expect(res).toMatchSnapshot();
  });
});
