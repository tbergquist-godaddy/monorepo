// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';
import { generateExecuteTestQuery } from '@tbergq/graphql-services';

import queries from '../../../../TvhelperQueries';
import getDataloaders from '../../../../getDataloaders';

jest.mock('../../../../../graphql-services/src/fetch.js');
const context = {
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};
const executeTestQuery = generateExecuteTestQuery(queries, context);

generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input, null));
