// @flow

import UserRepository from '../UserRepository';
import sequelize from '../../connection';

const user = {
  username: 'tito',
  email: 'tito@bonito.com',
  password: 'password',
};

beforeEach(async () => {
  await UserRepository.createUser({
    username: 'test_user',
    email: 'test@test.no',
    password: '123456',
  });
});

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

it('verifies password', async () => {
  expect(await UserRepository.verifyPassword('test_user', '123456')).not.toBeNull();
});

it('returns null for wrong password', async () => {
  expect(await UserRepository.verifyPassword('test_user', 'wrong')).toBeNull();
});

it('returns null for non existing user', async () => {
  expect(await UserRepository.verifyPassword('test_users', '123456')).toBeNull();
});
