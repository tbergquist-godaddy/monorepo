// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';

import executeTestQuery from '../../services/executeTestQuery';

describe('mutations', () => {
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input));
});
