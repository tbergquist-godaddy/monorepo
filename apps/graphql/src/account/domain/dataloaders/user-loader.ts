import Dataloader from 'dataloader';

import UserRepository, { IUserRepository, MaybeUser } from '../../infrastructure/user-repository';

const fetchUser = async (
  usernames: ReadonlyArray<string>,
  repository: IUserRepository,
): Promise<Array<MaybeUser>> => {
  const users = await repository.getByUserNames([...usernames]);
  if (users == null) {
    return new Array(usernames.length).fill(null);
  }
  return users;
};

const makeUserLoader = (repository = new UserRepository()) => {
  return new Dataloader<string, MaybeUser>((usernames: ReadonlyArray<string>) =>
    fetchUser(usernames, repository),
  );
};

export type UserDataLoader = Dataloader<string, MaybeUser, string>;
export default makeUserLoader;
