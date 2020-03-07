// @flow

import { UserRepository, tvHelperConnection } from '@tbergq/tvhelper-persistence';

import executeTestQuery from '../../../../services/executeTestQuery';

beforeEach(async () => {
  await UserRepository.createUser({
    username: 'tito',
    password: 'bonito',
    email: 'tito@bonito.es',
  });
});

afterEach(async () => {
  await tvHelperConnection.collection('users').drop();
});

const query = `
mutation mut($username: String!, $password: String!, $newPassword: String!) {
tvhHelperChangePassword(username: $username, password:$password, newPassword:$newPassword) {
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
    await executeTestQuery(query, { username: 'tito', password: 'bonito', newPassword: 'lolita' }),
  ).toMatchSnapshot();
});

it('returns error type for wrong password', async () => {
  expect(
    await executeTestQuery(query, {
      username: 'tito',
      password: 'bonitost',
      newPassword: 'lolita',
    }),
  ).toMatchSnapshot();
});
