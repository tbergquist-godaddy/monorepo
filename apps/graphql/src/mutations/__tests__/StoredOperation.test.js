// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';

import executeTestQuery from '../../services/executeTestQuery';

describe('mutations', () => {
  generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), input => executeTestQuery(input));
});
