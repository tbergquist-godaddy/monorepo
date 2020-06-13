// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';

import executeTestQuery from '../../../../services/executeTestQuery';

describe('queries', () => {
  generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), (input) =>
    executeTestQuery(input, null),
  );
});
