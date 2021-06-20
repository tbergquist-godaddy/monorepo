import DataLoader from 'dataloader';
import { UserRepository } from '@tbergq/tvhelper-persistence';

import type { User as UserType } from '../Account';

const fetchUser = async (usernames: ReadonlyArray<string>) => {
  const users = await UserRepository.findUsers(usernames);
  return users.map((user: UserType) => {
    if (user == null) {
      return null;
    }
    return {
      id: user.id,
      username: user.username,
      password: user.password,
    };
  });
};

const UserLoader = (): DataLoader<string, UserType, string> =>
  new DataLoader<string, UserType>((usernames: ReadonlyArray<string>) => fetchUser(usernames));

export default UserLoader;
