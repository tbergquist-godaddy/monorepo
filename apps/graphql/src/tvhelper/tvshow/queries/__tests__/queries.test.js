// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';

import executeTestQuery from '../../../../services/executeTestQuery';

jest.mock('@tbergq/tvhelper-persistence', () => {
  const pack = jest.requireActual('@tbergq/tvhelper-persistence');
  return {
    ...pack,
    FavoritesRepository: () => ({
      getFavorites: jest.fn(() => Promise.resolve([{ id: '123', userId: '123', serieId: '6' }])),
    }),
  };
});

describe('queries', () => {
  generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), input =>
    executeTestQuery(input, null, { user: { id: '123' } }),
  );
});
