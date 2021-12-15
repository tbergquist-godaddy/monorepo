/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from 'src/prisma/prisma-service';

import { TeamService } from '../team-service';

const setup = () => {
  const findMany = jest.fn();
  const prismaService: PrismaService = {
    team: {
      findMany,
    },
  } as any;

  const teamService = new TeamService(prismaService);

  return {
    teamService,
    findMany,
  };
};

it('returns an array of teams', async () => {
  const { teamService, findMany } = setup();
  const userId = '1';
  const teams = [
    { id: '20', name: 'team1', userId },
    { id: '21', name: 'team2', userId },
  ];
  findMany.mockResolvedValue(teams);

  await expect(teamService.findByUserIds([userId])).resolves.toEqual([teams]);
});

it('returns an array of teams grouped by the user id', async () => {
  const { teamService, findMany } = setup();
  const userId = '1';
  const userId2 = '2';
  const teams = [
    { id: '20', name: 'team1', userId },
    { id: '21', name: 'user2-team', userId: userId2 },
    { id: '22', name: 'team2', userId },
  ];

  findMany.mockResolvedValue(teams);

  await expect(teamService.findByUserIds([userId, userId2])).resolves.toEqual([
    [teams[0], teams[2]],
    [teams[1]],
  ]);
});
