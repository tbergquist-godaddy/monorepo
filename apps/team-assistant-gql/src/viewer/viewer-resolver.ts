import { Query, Resolver } from '@nestjs/graphql';
import { Loader } from '@cobraz/nestjs-dataloader';
import { UserLoader } from 'src/user/user-dataloader';
import DataLoader from 'dataloader';

import { Unauthorized } from './models/unauthorized';
import { User } from '../user/models/user';
import { Viewer } from './models/viewer';

@Resolver(() => Viewer)
export class ViewerResolver {
  @Query(() => Viewer)
  async viewer(
    @Loader(UserLoader) userLoader: DataLoader<User['id'], User>,
  ): Promise<User | Unauthorized> {
    const user = await userLoader.load('ckwxawwk200244bqzhgriibqm');

    return user ?? { reason: 'Unauthorized' };
  }
}
