import UserRepository, { IUserRepository } from '../infrastructure/user-repository';
import { IUserDTO } from './dto/user-dto';

interface IUserService {
  getByUserName: (username: string) => Promise<IUserDTO | null>;
}

export default class UserService implements IUserService {
  repository: IUserRepository;

  constructor(repository: IUserRepository = new UserRepository()) {
    this.repository = repository;
  }

  async getByUserName(username: string): Promise<IUserDTO | null> {
    const user = await this.repository.getByUserName(username);

    if (user == null) {
      return null;
    }

    const { password, _id: id, ...rest } = user;
    return {
      id,
      ...rest,
    };
  }
}
