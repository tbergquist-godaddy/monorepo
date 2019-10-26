// @flow

import Dataloader from 'dataloader';
import { UserRepository } from '@tbergq/tvhelper-persistence';
import type { User as UserType } from '@tbergq/graphql-services';

const fetchUser = async (usernames: $ReadOnlyArray<string>) => {
  const users = await UserRepository.findUsers(usernames);
  return users.map(user => {
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

const UserLoader = () =>
  new Dataloader<string, ?UserType>((usernames: $ReadOnlyArray<string>) => fetchUser(usernames));

export default UserLoader;
