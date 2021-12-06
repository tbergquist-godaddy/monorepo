import { Query, Resolver } from '@nestjs/graphql';

import { Unauthorized } from './models/unauthorized';
import { User } from './models/user';
import { Viewer } from './models/viewer';

@Resolver(() => Viewer)
export class ViewerResolver {
  @Query(() => Viewer)
  viewer(): User | Unauthorized {
    const user = new User();
    user.id = '1';
    user.email = 'test@test.com';
    return user;
  }
}
