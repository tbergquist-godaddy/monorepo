// @flow

import UserRepository from '../User';

const user = {
  username: 'don_tito',
  password: 'f3rff4fafR!3efw3f',
  email: 'test@test.no',
};

it('creates a new user', async () => {
  const { email, emailConfirmed, username, password } = await UserRepository.createUser(user);
  expect(email).toBe(user.email);
  expect(emailConfirmed).toBe(false);
  expect(username).toBe(user.username);
  expect(password).not.toBe(user.password);
});
