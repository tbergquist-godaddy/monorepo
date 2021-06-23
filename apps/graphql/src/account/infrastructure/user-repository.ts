import { Model } from 'mongoose';

import UserModel, { IUser } from './entities/user-entity';
import { log } from '../../crosscutting';

export interface IUserRepository {
  getByUserName: (username: string) => Promise<IUser | null | undefined>;
}

export default class UserRepository implements IUserRepository {
  model: Model<IUser>;

  constructor(model: Model<IUser> = UserModel) {
    this.model = model;
  }

  async getByUserName(username: string): Promise<IUser | null | undefined> {
    try {
      const query = await this.model.findOne({ username });
      return query?.toJSON();
    } catch (e) {
      log(`failed to fetch user: ${username}`, e);
      return null;
    }
  }
}
