import { createUnionType } from '@nestjs/graphql';

import { Unauthorized } from './unauthorized';
import { User } from './user';

export const Viewer = createUnionType({
  name: 'Viewer',
  types: () => [User, Unauthorized],
});
