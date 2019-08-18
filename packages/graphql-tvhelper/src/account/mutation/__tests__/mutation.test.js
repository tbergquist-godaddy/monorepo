// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';
import { generateExecuteTestQuery } from '@tbergq/graphql-services';
import mockingoose from 'mockingoose';
import { UserModel } from '@tbergq/tvhelper-persistence';

import Mutations from '../../../../TvHelperMutations';
import getDataloaders from '../../../../getDataloaders';

const context = {
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};

const executeTestQuery = generateExecuteTestQuery(null, Mutations, context);

jest.mock('../../../../../graphql-services/src/shared/resolvers/LoginResolver.js', () => () => {
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

generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => executeTestQuery(input));
