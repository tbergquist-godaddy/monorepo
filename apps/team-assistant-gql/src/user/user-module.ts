import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma-module';
import { TeamModule } from 'src/team/team-module';

import { UserService } from './user-service';
import { UserResolver } from './user-resolver';

@Module({
  imports: [PrismaModule, TeamModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
