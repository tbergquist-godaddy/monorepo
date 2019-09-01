// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';
import { generateExecuteTestQuery } from '@tbergq/graphql-services';

import queries from '../../../../TvhelperQueries';
import getDataloaders from '../../../../getDataloaders';

const context = {
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};
const executeTestQuery = generateExecuteTestQuery(queries, null, context);

describe('queries', () => {
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input, null));
});
