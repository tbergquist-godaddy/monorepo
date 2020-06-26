// @flow

import { config } from 'dotenv';
import path from 'path';
import { connection } from '@tbergq/trainingjournal-persistence';

config({ path: path.join(__dirname, '..', '.env') });

beforeEach(async () => {
  await connection.query('ALTER TABLE exercises AUTO_INCREMENT = 1;');
  await connection.query('ALTER TABLE users AUTO_INCREMENT = 1;');
});

afterEach(async () => {
  await connection.query('delete from exercises;');
  await connection.query('delete from users;');
});
