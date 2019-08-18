// @flow

import UserModel from '../models/UserModel';

export default class UserRepository {
  findUser(username: string) {
    return UserModel.findOne({ username });
  }

  findUsers(usernames: $ReadOnlyArray<string>) {
    return UserModel.find({ username: { $in: usernames } });
  }
}
