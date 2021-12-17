import { createUnionType } from '@nestjs/graphql';

import { CreateUserError } from './create-user-error';
import { User } from './user';

export const CreateUserResponse = createUnionType({
  name: 'CreateUserResponse',
  types: () => [User, CreateUserError],
  resolveType: (value: User) => {
    if ('id' in value) {
      return User;
    }
    if ('message' in value) {
      return CreateUserError;
    }
    return null;
  },
});
