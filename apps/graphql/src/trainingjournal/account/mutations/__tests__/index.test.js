// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';

import executeTestQuery from '../../../../services/executeTestQuery';

jest.mock('jsonwebtoken', () => ({
  sign: () => 'signedToken',
}));

jest.mock('@tbergq/trainingjournal-persistence', () => ({
  UserRepository: {
    createUser: user => ({ ...user, id: '1' }),
    verifyPassword: (username, password) => (password === 'fail' ? null : { id: '1', username }),
  },
}));

describe('trainingjournal account mutations', () => {
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input));
});
