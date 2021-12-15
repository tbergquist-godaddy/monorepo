import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma-module';
import { TeamModule } from 'src/team/team-module';
import { AuthModule } from 'src/auth/auth-module';

import { UserService } from './user-service';
import { UserResolver } from './user-resolver';
import { UserLoader } from './user-dataloader';

@Module({
  imports: [PrismaModule, TeamModule, AuthModule],
  providers: [UserResolver, UserService, UserLoader],
})
export class UserModule {}
