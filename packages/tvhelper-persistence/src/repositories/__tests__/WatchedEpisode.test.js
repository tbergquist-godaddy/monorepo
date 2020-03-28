// @flow

import WatchedEpisode from '../WatchedEpisode';
import UserRepository from '../User';
import connection from '../../connection';

const user1 = {
  username: 'lol',
  password: 'lol',
  email: 'lol@lol.no',
};
let user1Id;
const user2 = {
  username: 'rofl',
  password: 'rofl',
  email: 'rofl@rofl.no',
};
let user2Id;
const episodeId = 6;

describe('WatchedEpisode', () => {
  beforeEach(async () => {
    const { id: userId1 } = await UserRepository.createUser(user1);
    user1Id = userId1;
    const { id: userId2 } = await UserRepository.createUser(user2);

    user2Id = userId2;
    await WatchedEpisode.markAsWatched(user1Id, episodeId);
  });

  afterEach(async () => {
    await connection.collection('users').drop();
  });

  it('finds added episode', async () => {
    const episodes = await await WatchedEpisode.findEpisodes(user1Id, [episodeId]);
    expect(episodes).toHaveLength(1);
    expect(episodes[0].episodeId).toBe(episodeId);
    expect(episodes[0].userId).toBe(user1Id);
  });

  it('does not return episodes for wrong user', async () => {
    const episodes = await WatchedEpisode.findEpisodes(user2Id, [episodeId]);
    expect(episodes).toHaveLength(0);
  });

  it('deletes watched episode', async () => {
    const success = await WatchedEpisode.deleteWatchedEpisode(user1Id, episodeId);
    expect(success).toEqual(true);

    const episodes = await WatchedEpisode.findEpisodes(user1Id, [episodeId]);
    expect(episodes).toHaveLength(0);
  });

  it('returns false if trying to delete non existing episode', async () => {
    const success = await WatchedEpisode.deleteWatchedEpisode(user1Id, 7);
    expect(success).toEqual(false);
  });
});
