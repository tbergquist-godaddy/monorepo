import { createUnionType } from '@nestjs/graphql';

import { Unauthorized } from './unauthorized';
import { User } from '../../user/models/user';

export const Viewer = createUnionType({
  name: 'Viewer',
  types: () => [User, Unauthorized],
  resolveType: (value: User | Unauthorized) => {
    if ('id' in value) {
      return User;
    }
    return Unauthorized;
  },
});
