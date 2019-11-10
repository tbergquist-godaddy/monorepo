// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';

import executeTestQuery from '../../../../services/executeTestQuery';

describe('queries', () => {
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input, null));
});
