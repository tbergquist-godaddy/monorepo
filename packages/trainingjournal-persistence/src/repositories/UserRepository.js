// @flow strict

import { encryptPassword, generateSalt } from '@tbergq/persistence-utils';

import Model from '../models/UserModel';
import User from '../dataObjects/User';

type CreateUserInput = {|
  +username: string,
  +password: string,
  +email: string,
|};

export default class UserRepository {
  static async createUser(input: CreateUserInput): Promise<User> {
    const salt = generateSalt(16);
    const password = encryptPassword(input.password, salt);
    const user = await Model.create({
      ...input,
      password,
      salt,
    });

    return new User(user);
  }

  static async verifyPassword(username: string, password: string): Promise<null | User> {
    const user = await Model.findOne({ username });
    if (user == null) {
      return null;
    }
    return encryptPassword(password, user.salt) === user.password ? new User(user) : null;
  }

  static async findUser(username: string): Promise<null | User> {
    const user = await Model.findOne({ username });
    if (user == null) {
      return null;
    }
    return new User(user);
  }
}
