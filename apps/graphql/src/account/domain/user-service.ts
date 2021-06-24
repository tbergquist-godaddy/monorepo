import { verify } from 'password-hash';

import { IUser } from '../infrastructure/entities/user-entity';
import { IUserDTO } from './dto/user-dto';
import makeUserLoader, { UserDataLoader } from './dataloaders/user-loader';

type MaybeUser = IUserDTO | null;

export interface IUserService {
  getByUserName: (username: string) => Promise<MaybeUser>;
  getByUserNames: (usernames: Array<string>) => Promise<Array<MaybeUser> | null>;
  verifyPassword: (username: string, password: string) => Promise<boolean>;
}

export default class UserService implements IUserService {
  userLoader: UserDataLoader;

  constructor(userLoader: UserDataLoader = makeUserLoader()) {
    this.userLoader = userLoader;
  }

  mapUserToDTO(user: IUser | null | undefined | Error): MaybeUser {
    if (user == null || user instanceof Error) {
      return null;
    }

    const { password, _id: id, ...rest } = user;
    return {
      id,
      ...rest,
    };
  }

  async verifyPassword(username: string, password: string): Promise<boolean> {
    const user = await this.userLoader.load(username);
    if (user == null || user instanceof Error) {
      return false;
    }
    return verify(password, user.password);
  }

  async getByUserNames(usernames: Array<string>): Promise<Array<MaybeUser> | null> {
    const users = await this.userLoader.loadMany(usernames);

    return users.map(this.mapUserToDTO);
  }

  async getByUserName(username: string): Promise<MaybeUser> {
    const user = await this.userLoader.load(username);

    return this.mapUserToDTO(user);
  }
}
