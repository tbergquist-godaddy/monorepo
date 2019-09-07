// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';
import { generateExecuteTestQuery } from '@tbergq/graphql-services';

import createdStoredOperations from '../StoredOperation';

const executeTestQuery = generateExecuteTestQuery(
  null,
  {
    createdStoredOperations,
  },
  {},
);

describe('mutations', () => {
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input));
});
