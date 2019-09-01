// @flow

import { generateExecuteTestQuery } from '@tbergq/graphql-services';
import { UserRepository, tvHelperConnection } from '@tbergq/tvhelper-persistence';

import Mutations from '../../../../TvHelperMutations';
import getDataloaders from '../../../../getDataloaders';

let userId;
const context = {
  user: {},
  dataLoader: {
    tvhelper: getDataloaders(),
  },
};

const mutation = `
mutation {
  markAsWatched(episodeId: "ZXBpc29kZTo2") {
    success
    episode {
      id
    }
  }
}
`;
const executeTestQuery = generateExecuteTestQuery(null, Mutations, context);

describe('MarkAsWatched', () => {
  beforeEach(async () => {
    const user = await UserRepository.createUser({
      password: 'lol',
      username: 'lol',
      email: 'lol',
    });
    userId = user.id;
  });

  afterEach(async () => {
    await tvHelperConnection.collection('users').drop();
    context.user = {};
  });

  it('marks episode as watched', async () => {
    context.user.id = userId;
    const res = await executeTestQuery(mutation);
    expect(res).toMatchSnapshot();
  });

  it('handles not logged in users', async () => {
    const res = await executeTestQuery(mutation);
    expect(res).toMatchSnapshot();
  });
});
