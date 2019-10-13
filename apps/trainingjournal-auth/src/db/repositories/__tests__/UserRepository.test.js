// @flow strict

import Model from '../../models/UserModel';
import UserRepository from '../UserRepository';
import connection from '../../connection';

describe('UserRepository', () => {
  afterEach(async () => {
    await connection.collection('users').drop();
  });
  it('hashes password', async () => {
    await UserRepository.createUser({
      username: 'løken',
      password: 'I_am_naive',
      email: 'lol@lol.no',
    });

    const user = await Model.findOne({ username: 'løken' });
    expect(user.password).toBeDefined();
    expect(user.password).not.toEqual('I_am_naive');
  });

  it('does not return the password', async () => {
    // $FlowExpectedError: Intentionally checking value not specified by object
    const user = await UserRepository.createUser({
      username: 'løken',
      password: 'I_am_naive',
      email: 'lol@lol.no',
    });

    expect(user.username).toEqual('løken');
    expect(user.email).toEqual('lol@lol.no');
    expect(user.password).toBeUndefined();
  });
});
