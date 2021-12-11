import * as DataLoader from 'dataloader';
import { Injectable } from '@nestjs/common';
import { NestDataLoader } from '@cobraz/nestjs-dataloader';

import { Team } from './models/team-model';
import { TeamService } from './team-service';

@Injectable()
export class TeamLoader implements NestDataLoader<string, Array<Team>> {
  constructor(private readonly teamService: TeamService) {}

  generateDataLoader(): DataLoader<string, Array<Team>> {
    return new DataLoader<string, Array<Team>>((keys: Array<string>) =>
      this.teamService.findByUserIds(keys),
    );
  }
}
