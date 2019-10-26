// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/executeTestQuery';

jest.mock('@tbergq/trainingjournal-persistence', () => ({
  UserRepository: {
    createUser: user => ({ ...user, id: '1' }),
  },
}));

describe('trainingjournal account mutations', () => {
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input));
});
