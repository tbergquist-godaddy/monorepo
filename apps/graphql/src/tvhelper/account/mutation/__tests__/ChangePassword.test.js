// @flow

import { UserRepository, tvHelperConnection } from '@tbergq/tvhelper-persistence';

import executeTestQuery from '../../../../services/executeTestQuery';

let userId;

beforeEach(async () => {
  const user = await UserRepository.createUser({
    username: 'tito',
    password: 'bonito',
    email: 'tito@bonito.es',
  });
  userId = user.id;
});

afterEach(async () => {
  await tvHelperConnection.collection('users').drop();
});

const query = `
mutation mut($password: String!, $newPassword: String!) {
  tvHelperChangePassword(password:$password, newPassword:$newPassword) {
  __typename
  ... on ChangePasswordError {
    message
    isInvalidPassword
  }
  ... on ChangePasswordResponse {
    success
  }
}
}
`;

it('changes password', async () => {
  expect(
    await executeTestQuery(
      query,
      { password: 'bonito', newPassword: 'lolita' },
      { user: { id: userId } },
    ),
  ).toMatchSnapshot();
});

it('returns error type for wrong password', async () => {
  expect(
    await executeTestQuery(
      query,
      {
        password: 'bonitost',
        newPassword: 'lolita',
      },
      { user: { id: userId } },
    ),
  ).toMatchSnapshot();
});
