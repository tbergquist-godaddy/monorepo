// @flow

import { connection, UserRepository } from '@tbergq/trainingjournal-persistence';
import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';
import { nullthrows } from '@adeira/js';
import Mockdate from 'mockdate';

import executeTestQuery, { getOperationName } from '../../../services/executeTestQuery';

Mockdate.set(new Date(2020, 0, 1, 0, 0, 0, 0));

jest.mock('@adeira/graphql-relay', () => {
  const original = jest.requireActual('@adeira/graphql-relay');
  return {
    toGlobalId: () => original.toGlobalId('User', 1),
  };
});

const user = {
  username: 'tito',
  email: 'tito@bonito.com',
  password: 'password',
};

const inputs = {
  createUser: { input: user },
  login: { username: 'tita', password: 'password' },
};

beforeEach(async () => {
  await UserRepository.createUser({
    username: 'tita',
    password: 'password',
    email: 'tita@bebita.com',
  });
});

afterEach(async () => {
  await connection.query('delete from users;');
});

generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), (input) => {
  const key = nullthrows(getOperationName(input), 'Should exist');
  return executeTestQuery(input, inputs[key]);
});
