// @flow strict

import crypto from 'crypto';

const genRandomString = (length: number) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
};

export function generateSalt(length?: number = 16): string {
  return genRandomString(length);
}

export default function encryptPassword(password: string, salt: string): string {
  const hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  return hash.digest('hex');
}
