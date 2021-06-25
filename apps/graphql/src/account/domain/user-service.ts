import { verify, generate } from 'password-hash';
import { log } from 'crosscutting';

import { IUser } from '../infrastructure/entities/user-entity';
import { IUserDTO } from './dto/user-dto';
import makeUserLoader, { UserDataLoader } from './dataloaders/user-loader';
import UserRepository, { IUserRepository } from '../infrastructure/user-repository';

type MaybeUser = IUserDTO | null;

export interface IUserService {
  getByUserName: (username: string) => Promise<MaybeUser>;
  getByUserNames: (usernames: Array<string>) => Promise<Array<MaybeUser> | null>;
  verifyPassword: (username: string, password: string) => Promise<boolean>;
  changePassword: (username: string, password: string, newPassword: string) => Promise<boolean>;
  createUser: (user: Omit<IUser, '_id' | 'id'>) => Promise<MaybeUser>;
}

export default class UserService implements IUserService {
  #userLoader: UserDataLoader;
  #repository: IUserRepository;

  constructor(
    userLoader: UserDataLoader = makeUserLoader(),
    repository: IUserRepository = new UserRepository(),
  ) {
    this.#userLoader = userLoader;
    this.#repository = repository;
  }

  async createUser(user: Omit<IUser, '_id' | 'id'>): Promise<MaybeUser> {
    try {
      const newUser = await this.#repository.createUser(user);
      return this.mapUserToDTO(newUser);
    } catch {
      return null;
    }
  }

  async changePassword(username: string, password: string, newPassword: string): Promise<boolean> {
    try {
      const isVerified = await this.verifyPassword(username, password);

      if (!isVerified) {
        return false;
      }
      const user = await this.#userLoader.load(username);

      if (user == null) {
        return false;
      }

      user.password = generate(newPassword);
      return this.#repository.saveUser(user);
    } catch (e) {
      log('Failed to change password', e);
      return false;
    }
  }

  mapUserToDTO(user: IUser | null | undefined | Error): MaybeUser {
    if (user == null || user instanceof Error) {
      return null;
    }

    const { password, _id, ...rest } = user;
    return {
      ...rest,
    };
  }

  async verifyPassword(username: string, password: string): Promise<boolean> {
    const user = await this.#userLoader.load(username);
    if (user == null || user instanceof Error) {
      return false;
    }
    return verify(password, user.password);
  }

  async getByUserNames(usernames: Array<string>): Promise<Array<MaybeUser> | null> {
    const users = await this.#userLoader.loadMany(usernames);

    return users.map(this.mapUserToDTO);
  }

  async getByUserName(username: string): Promise<MaybeUser> {
    const user = await this.#userLoader.load(username);

    return this.mapUserToDTO(user);
  }
}
