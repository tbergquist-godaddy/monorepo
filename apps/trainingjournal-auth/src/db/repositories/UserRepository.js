// @flow strict

import Model from '../models/UserModel';
import User from '../dataObjects/User';

type CreateUserInput = {|
  +username: string,
  +password: string,
  +email: string,
|};

export default class UserRepository {
  static async createUser(input: CreateUserInput) {
    // TODO: Encrypt password
    const salt = 'salt';
    const user = await Model.create({
      ...input,
      salt,
    });
    return new User(user);
  }
}
