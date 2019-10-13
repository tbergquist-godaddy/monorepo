// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/executeTestQuery';

describe('trainingjournal account mutations', () => {
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input));
});
