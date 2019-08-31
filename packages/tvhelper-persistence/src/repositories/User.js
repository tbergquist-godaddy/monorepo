// @flow

import UserModel, { type UserType } from '../models/UserModel';

export default class UserRepository {
  id: string;
  username: string;
  password: string;
  email: string;

  constructor(user: UserType) {
    this.id = user._id.toString();
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
  }

  static async findUser(username: ?string) {
    const user = await UserModel.findOne({ username });

    return user == null ? null : new UserRepository(user);
  }

  static async findUsers(usernames: $ReadOnlyArray<string>) {
    const users = await UserModel.find({ username: { $in: usernames } });
    return users.map(user => (user == null ? null : new UserRepository(user)));
  }
}
