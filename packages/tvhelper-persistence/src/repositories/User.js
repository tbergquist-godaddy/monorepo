// @flow

import { generate } from 'password-hash';

import UserModel from '../models/UserModel';
import User from '../dataObjects/User';

type CreateUserType = {|
  +username: string,
  +password: string,
  +email: string,
|};

export default class UserRepository {
  static async findUser(username: ?string) {
    const user = await UserModel.findOne({ username });

    return user == null ? null : new User(user);
  }

  static async findUsers(usernames: $ReadOnlyArray<string>) {
    const users = await UserModel.find({ username: { $in: usernames } });
    return users.map(user => (user == null ? null : new User(user)));
  }

  static async createUser({ password, ...rest }: CreateUserType) {
    const addedUser = await UserModel.create({
      password: generate(password),
      ...rest,
    });
    return new User(addedUser);
  }
}
