// @flow

import { generate, verify } from 'password-hash';

import UserModel from '../models/UserModel';
import User from '../dataObjects/User';

type CreateUserType = {|
  +username: string,
  +password: string,
  +email: string,
|};

export default class UserRepository {
  static async findUser(username: ?string): Promise<null | User> {
    const user = await UserModel.findOne({ username });

    return user == null ? null : new User(user);
  }

  static async findUsers(usernames: $ReadOnlyArray<string>): Promise<$ReadOnlyArray<User | null>> {
    const users = await UserModel.find({ username: { $in: usernames } });
    return users.map((user) => (user == null ? null : new User(user)));
  }

  static async createUser({ password, ...rest }: CreateUserType): Promise<User> {
    const addedUser = await UserModel.create({
      password: generate(password),
      ...rest,
    });
    return new User(addedUser);
  }

  static async changePassword(
    userId: string,
    password: string,
    newPassword: string,
  ): Promise<User> | Error {
    const user = await UserModel.findById(userId);
    if (verify(password, user.password)) {
      user.password = generate(newPassword);
      await user.save();
      return new User(user);
    }
    throw new Error('Wrong password');
  }
}
