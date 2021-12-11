import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { User } from 'src/user/models/user';
import { toGlobalId } from '@adeira/graphql-global-id';
import { Loader } from '@cobraz/nestjs-dataloader';
import { TeamLoader } from 'src/team/team-dataloader';
import { Team } from 'src/team/models/team-model';
import DataLoader from 'dataloader';

@Resolver(() => User)
export class UserResolver {
  @ResolveField()
  id(@Parent() { id }: User) {
    return toGlobalId('User', id);
  }

  @ResolveField()
  teams(@Parent() { id }: User, @Loader(TeamLoader) teamLoader: DataLoader<Team['id'], Team>) {
    return teamLoader.load(id);
  }
}
