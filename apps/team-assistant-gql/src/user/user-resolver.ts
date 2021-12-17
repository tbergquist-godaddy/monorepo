import { Resolver, Parent, ResolveField, Args, Mutation } from '@nestjs/graphql';
import { User } from 'src/user/models/user';
import { toGlobalId } from '@adeira/graphql-global-id';
import { Loader } from '@cobraz/nestjs-dataloader';
import { TeamLoader } from 'src/team/team-dataloader';
import { Team } from 'src/team/models/team-model';
import DataLoader from 'dataloader';
import { GetConnectionArgs } from 'src/connection/connection-args';
import { connectionFromPromisedArray } from 'graphql-relay';
import { ValidationsService } from 'src/validations/validations-service';

import { UserService } from './user-service';
import { CreateUserInput } from './models/create-user-input';
import { CreateUserResponse } from './models/create-user-response';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly validationService: ValidationsService,
  ) {}

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

  @Mutation(() => CreateUserResponse, { nullable: true })
  async createUser(@Args('user') { email, password }: CreateUserInput) {
    const isValidEmail = this.validationService.isValidEmail(email);
    if (password === '') {
      return {
        message: 'Password is required',
        code: 'PASSWORD_REQUIRED',
      };
    }
    if (!isValidEmail) {
      return {
        message: `${email} is not a valid email`,
        code: 'INVALID_EMAIL',
      };
    }

    try {
      const user = await this.userService.createUser(email, password);
      return user;
    } catch {
      return {
        message: 'User already exists',
        code: 'USER_ALREADY_EXISTS',
      };
    }
  }
}
