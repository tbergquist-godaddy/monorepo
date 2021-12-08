import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma-service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findByIds(ids: Array<string>) {
    return this.prisma.user.findMany({ where: { id: { in: ids } } });
  }
}
