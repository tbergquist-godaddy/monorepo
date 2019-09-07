// @flow

import { generateExecuteTestQuery } from '@tbergq/graphql-services';
import {
  UserRepository,
  tvHelperConnection,
  WatchedEpisodeRepository,
} from '@tbergq/tvhelper-persistence';

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
  deleteWatchedEpisode(episodeId: "ZXBpc29kZTo2") {
    success
    episode {
      id
    }
  }
}
`;
const executeTestQuery = generateExecuteTestQuery(null, Mutations, context);

describe('DeleteWatchedEpisode', () => {
  beforeEach(async () => {
    const user = await UserRepository.createUser({
      password: 'lol',
      username: 'lol',
      email: 'lol',
    });
    userId = user.id;
    await WatchedEpisodeRepository.markAsWatched(user.id, 6);
  });

  afterEach(async () => {
    await tvHelperConnection.collection('users').drop();
    await tvHelperConnection.collection('watchedepisodes').drop();
    context.user = {};
  });

  it('deletes watched episode', async () => {
    context.user.id = userId;
    const res = await executeTestQuery(mutation);
    expect(res).toMatchSnapshot();
  });
});
