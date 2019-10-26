// @flow strict

import Model from '../../models/UserModel';
import UserRepository from '../UserRepository';
import connection from '../../connection';

let user;
describe('UserRepository', () => {
  beforeEach(async () => {
    // $FlowExpectedError: Intentionally checking field not specified in flow type
    user = await UserRepository.createUser({
      username: 'løken',
      password: 'I_am_naive',
      email: 'lol@lol.no',
    });
  });
  afterEach(async () => {
    await connection.collection('users').drop();
  });
  it('hashes password', async () => {
    const user = await Model.findOne({ username: 'løken' });
    expect(user.password).toBeDefined();
    expect(user.password).not.toEqual('I_am_naive');
  });

  it('does not return the password', () => {
    expect(user.username).toEqual('løken');
    expect(user.email).toEqual('lol@lol.no');
    expect(user.password).toBeUndefined();
  });

  it('verifies password', async () => {
    expect(await UserRepository.verifyPassword('løken', 'I_am_naive')).not.toBeNull();
  });

  it('returns false when user is not found', async () => {
    expect(await UserRepository.verifyPassword('laken', 'I_am_naive')).toBeNull();
  });

  it('returns false when password is wrong', async () => {
    expect(await UserRepository.verifyPassword('laken', '123456')).toBeNull();
  });
});
