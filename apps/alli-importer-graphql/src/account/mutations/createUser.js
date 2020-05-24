// @flow strict-local

import { GraphQLNonNull } from 'graphql';
import { UserRepository } from '@tbergq/alli-importer-persistence';

import CreateUserOrError, { CreateUserError } from '../types/output/CreateUserOrError';
import CreateUserInput from '../types/input/CreateUserInput';

type Args = {
  +user: {
    +password: string,
    +email: string,
  },
  ...
};

export default {
  type: CreateUserOrError,
  args: {
    user: {
      type: (GraphQLNonNull(CreateUserInput): GraphQLNonNull<typeof CreateUserInput>),
    },
  },
  resolve: async (
    _: mixed,
    { user: { password, email } }: Args,
  ): Promise<{ +success: boolean } | CreateUserError> => {
    try {
      const user = await UserRepository.createUser({
        password,
        email,
      });

      return user;
    } catch (e) {
      return new CreateUserError(e);
    }
  },
};
