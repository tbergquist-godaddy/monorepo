import { GraphqlContextType } from 'services/createGraphqlContext';

interface Args {
  username: string;
  password: string;
  email: string;
}

interface Resolve {
  success: boolean;
}

export default async function createUserResolver(
  _: unknown,
  { username, password, email }: Args,
  { userService }: GraphqlContextType,
): Promise<Resolve> {
  // TODO: Improve validations
  const user = await userService.createUser({ username, password, email });
  return {
    success: user != null,
  };
}
