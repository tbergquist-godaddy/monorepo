import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth-service';
import { PrismaService } from 'src/prisma/prisma-service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService, private readonly authService: AuthService) {}

  findByIds(ids: Array<string>) {
    return this.prisma.user.findMany({ where: { id: { in: ids } } });
  }

  createUser(email: string, password: string) {
    const { hash, salt } = this.authService.hashPassword(password);
    return this.prisma.user.create({
      data: {
        email,
        password: hash,
        salt,
      },
    });
  }
}
