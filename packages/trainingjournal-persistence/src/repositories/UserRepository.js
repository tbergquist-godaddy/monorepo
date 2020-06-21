// @flow

import { generateSalt, encryptPassword } from '@tbergq/persistence-utils';

import User, { type UserType } from '../models/User';

type CreateUserInput = {
  +username: string,
  +email: string,
  +password: string,
};

class UserRepository {
  model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }

  async createUser(user: CreateUserInput): Promise<UserType> {
    const salt = generateSalt();
    const dbUser = await this.model.create({
      ...user,
      salt,
      password: encryptPassword(user.password, salt),
    });
    return dbUser.toJSON();
  }

  async verifyPassword(username: string, password: string): Promise<UserType | null> {
    const user = await this.getByUsername(username);
    if (user == null || user.password !== encryptPassword(password, user.salt)) {
      return null;
    }
    return user.toJSON();
  }

  getByUsername(username: string): Promise<?User> {
    return this.model.findOne({ where: { username } });
  }
}

const userRepository: UserRepository = new UserRepository(User);
export default userRepository;
