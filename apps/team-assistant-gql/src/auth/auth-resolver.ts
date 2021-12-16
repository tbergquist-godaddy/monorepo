import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from 'src/user/user-service';

import { AuthService } from './auth-service';
import { AuthResponse } from './models/auth-response';
import { LoginInput } from './models/login-input';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => AuthResponse)
  async login(@Args('input') input: LoginInput) {
    const user = await this.userService.validatePassword({
      email: input.email,
      password: input.password,
    });

    return user == null ? null : this.authService.signToken(user);
  }
}
