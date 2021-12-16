import { Context, Query, Resolver } from '@nestjs/graphql';

import { User } from '../user/models/user';
import { Viewer } from './models/viewer';

@Resolver(() => Viewer)
export class ViewerResolver {
  @Query(() => Viewer)
  viewer(@Context('user') user: User) {
    return user ?? { reason: 'Unauthorized' };
  }
}
