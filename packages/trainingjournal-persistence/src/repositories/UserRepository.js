// @flow strict

import crypto from 'crypto';

import Model from '../models/UserModel';
import User from '../dataObjects/User';

type CreateUserInput = {|
  +username: string,
  +password: string,
  +email: string,
|};

const genRandomString = (length: number) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
};

const encryptPassword = (password: string, salt: string) => {
  const hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  return hash.digest('hex');
};

export default class UserRepository {
  static async createUser(input: CreateUserInput): Promise<User> {
    const salt = genRandomString(16);
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
