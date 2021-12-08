import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma-service';

import { Unauthorized } from './models/unauthorized';
import { User } from '../user/models/user';
import { Viewer } from './models/viewer';

@Resolver(() => Viewer)
export class ViewerResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => Viewer)
  async viewer(): Promise<User | Unauthorized> {
    const users = await this.prisma.user.findMany();

    return users[0] ?? { reason: 'Unauthorized' };
  }
}
