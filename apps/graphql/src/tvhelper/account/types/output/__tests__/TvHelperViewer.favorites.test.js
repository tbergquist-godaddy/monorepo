// @flow

import {
  UserRepository,
  FavoritesRepository,
  tvHelperConnection,
} from '@tbergq/tvhelper-persistence';

import executeTestQuery from '../../../../../services/executeTestQuery';

const query = `query FavoritesQuery {
  viewer {
    ... on TvHelperViewer{
      favorites {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
}`;

let userId;

beforeEach(async () => {
  const user = await UserRepository.createUser({
    email: 'lol@lol.no',
    username: 'tito',
    password: 'a',
  });
  userId = user.id;
  await FavoritesRepository.createFavorite(userId, '6');
});

afterEach(async () => {
  await tvHelperConnection.collection('users').drop();
  await tvHelperConnection.collection('favorites').drop();
});

it('renders TJViewer type', async () => {
  const data = await executeTestQuery(query, {}, { user: { app: 'tvhelper', id: userId } });
  expect(data).toMatchSnapshot();
});
