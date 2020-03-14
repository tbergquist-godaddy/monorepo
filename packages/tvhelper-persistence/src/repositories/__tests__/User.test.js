// @flow

import UserRepository from '../User';
import connection from '../../connection';

const user1 = {
  username: 'lol',
  password: 'lol',
  email: 'lol@lol.no',
};
let user1Id;

beforeEach(async () => {
  const { id: userId1 } = await UserRepository.createUser(user1);
  user1Id = userId1;
});

afterEach(async () => {
  await connection.collection('users').drop();
});

it('should find the user with findOne', async () => {
  const dbuser = await UserRepository.findUser(user1.username);

  expect(dbuser?.id).toEqual(user1Id);
  expect(dbuser?.username).toEqual(user1.username);
  expect(dbuser?.email).toEqual(user1.email);
});

it('should change password', async () => {
  const dbuser = await UserRepository.findUser(user1.username);
  const hashedPassword = dbuser?.password;

  await UserRepository.changePassword(user1Id, user1.password, 'omg');
  const withNewPassword = await UserRepository.findUser(user1.username);
  expect(withNewPassword?.password).not.toEqual(hashedPassword);
});

it('should throw an error if you have wrong password', async () => {
  await expect(
    UserRepository.changePassword(user1Id, `${user1.password} wrong`, 'omg'),
  ).rejects.toThrow('Wrong password');
});
