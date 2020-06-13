// @flow

import UserRepository from '../UserRepository';
import sequelize from '../../connection';

const user = {
  username: 'tito',
  email: 'tito@bonito.com',
  password: 'password',
};

afterEach(async () => {
  await sequelize.query('delete from users;');
});

it('adds a user', async () => {
  const { email, password, salt, username } = await UserRepository.createUser(user);
  expect(email).toBe(user.email);
  expect(typeof password).toBe('string');
  expect(password).not.toEqual(user.password);
  expect(typeof salt).toBe('string');
  expect(username).toBe(user.username);
});
