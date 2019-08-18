// @flow

import Dataloader from 'dataloader';
import { UserRepository } from '@tbergq/tvhelper-persistence';
import type { User as UserType } from '@tbergq/graphql-services';

const fetchUser = async (usernames: $ReadOnlyArray<string>, userRepository: UserRepository) => {
  const users = await userRepository.findUsers(usernames);
  return users.map(user => {
    if (user == null) {
      return null;
    }
    return {
      id: user._id,
      username: user.username,
      password: user.password,
    };
  });
};

const UserLoader = (userRepository: UserRepository) =>
  new Dataloader<string, ?UserType>((usernames: $ReadOnlyArray<string>) =>
    fetchUser(usernames, userRepository),
  );

export default UserLoader;
