import { Injectable } from '@nestjs/common';
import { randomBytes, pbkdf2Sync } from 'crypto';

const SALT_LENGTH = 16;
const ITERATIONS = 100000;
const KEY_LENGTH = 64;
const DIGEST = 'sha512';

@Injectable()
export class AuthService {
  #generateHash = (password: string, salt: string) => {
    const buffer = pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST);
    return buffer.toString('hex');
  };

  hashPassword(password: string) {
    const salt = randomBytes(SALT_LENGTH).toString('base64');
    const hash = this.#generateHash(password, salt);

    return { hash, salt };
  }

  isPasswordCorrect({
    hashedPassword,
    password,
    salt,
  }: {
    hashedPassword: string;
    password: string;
    salt: string;
  }) {
    return hashedPassword === this.#generateHash(password, salt);
  }
}
