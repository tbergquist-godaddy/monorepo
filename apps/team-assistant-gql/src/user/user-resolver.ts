import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { User } from 'src/user/models/user';
import { toGlobalId } from '@adeira/graphql-global-id';

@Resolver(() => User)
export class UserResolver {
  @ResolveField()
  id(@Parent() { id }: User) {
    return toGlobalId('User', id);
  }
}
