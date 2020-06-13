// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';
import mockingoose from 'mockingoose';
import { UserModel } from '@tbergq/tvhelper-persistence';
import path from 'path';

import executeTestQuery from '../../../../services/executeTestQuery';

jest.mock('@tbergq/graphql-services/src/shared/resolvers/LoginResolver', () => () => {
  return {
    token: 'token',
    success: true,
  };
});

const user = {
  _id: '507f191e810c19729de860ea',
  username: 'tito',
  email: 'tito@bonito.com',
  password: 'password',
};

mockingoose(UserModel).toReturn([user], 'find');

describe('mutations', () => {
  generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), (input) =>
    executeTestQuery(input),
  );
});
