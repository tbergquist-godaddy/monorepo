// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';
import { generateExecuteTestQuery } from '@tbergq/graphql-services';

import queries from '../../../../TvhelperQueries';
import getDataloaders from '../../../../getDataloaders';

jest.mock('@tbergq/tvhelper-persistence', () => {
  const pack = jest.requireActual('@tbergq/tvhelper-persistence');
  return {
    ...pack,
    FavoritesRepository: () => ({
      getFavorites: jest.fn(() => Promise.resolve([{ id: '123', userId: '123', serieId: '6' }])),
    }),
  };
});
const context = {
  user: {
    id: '123',
  },
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};
const executeTestQuery = generateExecuteTestQuery(queries, null, context);

describe('queries', () => {
  generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input, null));
});
