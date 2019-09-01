// @flow

import { generateExecuteTestQuery } from '@tbergq/graphql-services';

import Mutations from '../../../../TvHelperMutations';
import getDataloaders from '../../../../getDataloaders';

const context = {
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};

const executeTestQuery = generateExecuteTestQuery(null, Mutations, context);

describe('CreateUser', () => {
  it('works', async () => {
    const res = await executeTestQuery(`
    mutation createUser {
      createUser(username: "lol", password:"lol", email: "lol@lol.lol") {
        success
      }
    }
    `);
    expect(res).toMatchSnapshot();
  });
});
