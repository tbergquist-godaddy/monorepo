// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';

import executeTestQuery from '../../../services/executeTestQuery';

jest.mock('@tbergq/trainingjournal-persistence', () => ({
  UserRepository: {
    createUser: jest.fn((input) => Promise.resolve({ ...input, id: 1 })),
  },
}));

const user = {
  username: 'tito',
  email: 'tito@bonito.com',
  password: 'password',
};

describe('mutations', () => {
  generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), (input) =>
    executeTestQuery(input, { input: user }),
  );
});
