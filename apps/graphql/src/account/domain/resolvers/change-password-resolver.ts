import { GraphqlContextType } from 'services/createGraphqlContext';

import { PasswordError } from '../../../tvhelper/account/types/output/ChangePasswordOrError';

interface Args {
  password: string;
  newPassword: string;
}
type Resolve = PasswordError | { success: boolean };

export default async function changePasswordResolver(
  _: unknown,
  { password, newPassword }: Args,
  { user, userService }: GraphqlContextType,
): Promise<Resolve> {
  const username = user?.username;
  if (username == null) {
    return new PasswordError('You must be logged in to change password', false);
  }

  const isChanged = await userService.changePassword(username, password, newPassword);

  if (!isChanged) {
    return new PasswordError('Wrong credentials', true);
  }
  return { success: true };
}
