import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma-service';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  async findByUserIds(userIds: Array<string>) {
    const teams = await this.prisma.team.findMany({ where: { userId: { in: userIds } } });
    const map = userIds.map((userId) => teams.filter((team) => team.userId === userId));
    return map;
  }
}
