import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma-module';

import { TeamLoader } from './team-dataloader';
import { TeamService } from './team-service';

@Module({
  imports: [PrismaModule],
  providers: [TeamService, TeamLoader],
  exports: [TeamLoader],
})
export class TeamModule {}
