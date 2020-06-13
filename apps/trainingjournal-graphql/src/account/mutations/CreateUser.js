// @flow strict-local

import { GraphQLNonNull, GraphQLInputObjectType } from 'graphql';
import { UserRepository } from '@tbergq/trainingjournal-persistence';

import CreateUserInput, { type UserInput } from '../types/input/CreateUserInput';
import CreateUserOrError from '../types/output/CreateUserOrError';

type Args = {
  input: UserInput,
  ...
};

type User = {
  +email: string,
  +password: string,
  +salt: string,
  +username: string,
};

type UserError = {
  +message: string,
};

export default {
  type: CreateUserOrError,
  args: {
    input: {
      type: (GraphQLNonNull(CreateUserInput): GraphQLNonNull<GraphQLInputObjectType>),
    },
  },
  resolve: async (_: mixed, args: Args): Promise<User | UserError> => {
    try {
      const user = await UserRepository.createUser(args.input);
      return user;
    } catch (e) {
      const firstError = e.errors.shift();
      return { message: firstError.message };
    }
  },
};
