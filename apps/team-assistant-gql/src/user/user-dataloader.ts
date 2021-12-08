import * as DataLoader from 'dataloader';
import { Injectable } from '@nestjs/common';
import { NestDataLoader } from '@cobraz/nestjs-dataloader';

import { User } from './models/user';
import { UserService } from './user-service';

@Injectable()
export class UserLoader implements NestDataLoader<string, User> {
  constructor(private readonly userService: UserService) {}

  generateDataLoader(): DataLoader<string, User> {
    return new DataLoader<string, User>((keys: Array<string>) => this.userService.findByIds(keys));
  }
}
