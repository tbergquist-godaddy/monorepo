// @flow

import mockingoose from 'mockingoose';

import model from '../../models/UserModel';
import repository from '../User';

it('should find the user with findOne', async () => {
  const user = {
    _id: '507f191e810c19729de860ea',
    username: 'name',
    email: 'name@email.com',
    password: 'password',
  };

  mockingoose(model).toReturn(user, 'findOne');
  const dbuser = await repository.findUser('name');

  expect(dbuser.id).toEqual(user._id);
  expect(dbuser.username).toEqual(user.username);
  expect(dbuser.email).toEqual(user.email);
  expect(dbuser.password).toEqual(user.password);
});
