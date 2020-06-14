// @flow

import { connection } from '@tbergq/trainingjournal-persistence';

beforeAll(async () => {
  await connection.sync();
});

afterAll(async () => {
  await connection.close();
});
