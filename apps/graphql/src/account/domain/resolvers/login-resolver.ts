import { nullthrows } from '@adeira/js';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

import { GraphqlContextType } from '../../../services/createGraphqlContext';
import { IUserDTO } from '../dto/user-dto';

interface Args {
  username: string;
  password: string;
}

config();

const { JWT_SECRET } = process.env;

const signToken = (user: IUserDTO | null): string => {
  // @ts-ignore: This is an object
  return jwt.sign(user, nullthrows(JWT_SECRET), {
    expiresIn: '1y',
    issuer: 'tbergq-graphql.now.sh',
  });
};

export default async function loginResolver(
  _: unknown,
  { username, password }: Args,
  { userService, log }: GraphqlContextType,
): Promise<{ success: boolean; token: string | null }> {
  try {
    const passwordIsCorrect = await userService.verifyPassword(username, password);

    if (!passwordIsCorrect) {
      return { success: false, token: null };
    }

    const user = await userService.getByUserName(username);
    return {
      success: true,
      token: signToken(user),
    };
  } catch (e) {
    log('login failed', e);
    return { success: false, token: null };
  }
}
