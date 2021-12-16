import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma-service';
import { randomBytes, pbkdf2Sync } from 'crypto';

const SALT_LENGTH = 16;
const ITERATIONS = 100000;
const KEY_LENGTH = 64;
const DIGEST = 'sha512';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  #generateHash = (password: string, salt: string) => {
    const buffer = pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST);
    return buffer.toString('hex');
  };

  hashPassword(password: string) {
    const salt = randomBytes(SALT_LENGTH).toString('base64');
    const hash = this.#generateHash(password, salt);

    return { hash, salt };
  }

  async validatePassword({ email, password }: { email: string; password: string }) {
    const user = await this.findByEmail(email);
    if (user == null) {
      return null;
    }

    const isValid = user.password === this.#generateHash(password, user.salt);
    return isValid ? user : null;
  }

  findByIds(ids: Array<string>) {
    return this.prisma.user.findMany({ where: { id: { in: ids } } });
  }

  findByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }

  createUser(email: string, password: string) {
    const { hash, salt } = this.hashPassword(password);
    return this.prisma.user.create({
      data: {
        email,
        password: hash,
        salt,
      },
    });
  }
}
