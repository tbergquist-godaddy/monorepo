import { Resolver, Parent, ResolveField, Args } from '@nestjs/graphql';
import { User } from 'src/user/models/user';
import { toGlobalId } from '@adeira/graphql-global-id';
import { Loader } from '@cobraz/nestjs-dataloader';
import { TeamLoader } from 'src/team/team-dataloader';
import { Team } from 'src/team/models/team-model';
import DataLoader from 'dataloader';
import { GetConnectionArgs } from 'src/connection/connection-args';
import { connectionFromPromisedArray } from 'graphql-relay';

@Resolver(() => User)
export class UserResolver {
  @ResolveField()
  id(@Parent() { id }: User) {
    return toGlobalId('User', id);
  }

  @ResolveField()
  teams(
    @Args() connectionArgs: GetConnectionArgs,
    @Parent() { id }: User,
    @Loader(TeamLoader) teamLoader: DataLoader<Team['id'], Array<Team>>,
  ) {
    return connectionFromPromisedArray<Team>(teamLoader.load(id), connectionArgs);
  }
}
