// @flow

import { generateSalt, encryptPassword } from '@tbergq/persistence-utils';

import User, { type UserType } from '../models/User';

type CreateUserInput = {
  +username: string,
  +email: string,
  +password: string,
};

export default class UserRepository {
  static async createUser(user: CreateUserInput): Promise<UserType> {
    const salt = generateSalt();
    const dbUser = await User.create({
      ...user,
      salt,
      password: encryptPassword(user.password, salt),
    });
    return dbUser.toJSON();
  }

  static async verifyPassword(username: string, password: string): Promise<UserType | null> {
    const user = await User.findOne({ where: { username } });
    if (user == null || user.password !== encryptPassword(password, user.salt)) {
      return null;
    }
    return user.toJSON();
  }
}
