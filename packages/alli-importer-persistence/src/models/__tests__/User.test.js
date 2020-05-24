// @flow

import UserRepository from '../User';

const user = {
  password: 'f3rff4fafR!3efw3f',
  email: 'test@test.no',
};

it('creates a new user', async () => {
  const { email, emailConfirmed, password } = await UserRepository.createUser(user);
  expect(email).toBe(user.email);
  expect(emailConfirmed).toBe(false);
  expect(password).not.toBe(user.password);
});
