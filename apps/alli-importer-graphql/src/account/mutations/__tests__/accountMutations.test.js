// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';
import { UserRepository, alliImporterConnection } from '@tbergq/alli-importer-persistence';

import executeTestQuery from '../../../common/executeTestQuery';

beforeEach(async () => {
  await UserRepository.createUser({ email: 'test@test.com', password: '123' });
});
afterEach(async () => {
  await alliImporterConnection.collection('users').drop();
});

describe('accountMutations', () => {
  generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), input => executeTestQuery(input));
});
