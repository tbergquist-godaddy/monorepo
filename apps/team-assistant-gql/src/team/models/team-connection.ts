import { ObjectType } from '@nestjs/graphql';
import { Connection } from 'src/connection/create-connection';

import { Team } from './team-model';

@ObjectType()
export class TeamConnection extends Connection<Team>(Team) {}
