import * as crosscutting from 'crosscutting';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, Types } from 'mongoose';

import { tvHelperConnection } from '../../../connection';
import WatchedEpisodeRepository from '../watched-episode-repository';

let connection: Connection;
let mongoServer: MongoMemoryServer;
let repository: WatchedEpisodeRepository;

const testUser: any = {
  email: 'test@test.no',
  password: 'lol',
  username: 'testern',
};

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  connection = await tvHelperConnection.openUri(mongoServer.getUri());
});

beforeEach(async () => {
  repository = new WatchedEpisodeRepository();

  const user = await connection.collection('users').insertOne(testUser);
  // eslint-disable-next-line require-atomic-updates
  testUser.id = user.insertedId;
});

afterEach(async () => {
  await connection.dropCollection('users');
  delete testUser.id;
});

afterAll(async () => {
  if (connection) {
    await connection.close();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
});

const clean = () => connection.dropCollection('watchedepisodes');

describe('addWatchedEpisode', () => {
  it('returns the created object on success', async () => {
    await expect(repository.addWatchedEpisode(testUser.id, 4)).resolves.toEqual(
      expect.objectContaining({
        episodeId: 4,
        userId: testUser.id.toString(),
        createdAt: expect.any(Date),
      }),
    );
    await clean();
  });

  it('returns null if creation fails', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();
    await expect(repository.addWatchedEpisode('123', 123)).resolves.toBeNull();
    spy.mockRestore();
  });
});

describe('deleteWatchedEpisode', () => {
  it('returns false when deletion fails', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();

    await expect(repository.deleteWatchedEpisode('123', 123)).resolves.toBe(false);
    expect(spy).toHaveBeenCalledWith('Failed to delete episode', expect.any(Error));
    spy.mockRestore();
  });

  it('returns false if deletedCount is less than 1', async () => {
    await expect(
      repository.deleteWatchedEpisode(new Types.ObjectId().toString(), 123),
    ).resolves.toBe(false);
  });

  it('returns true if deletedCount is greater than 0', async () => {
    const userId = new Types.ObjectId();
    const episodeId = 4;
    await connection.collection('watchedepisodes').insertOne({
      userId,
      episodeId,
    });
    await expect(repository.deleteWatchedEpisode(userId.toString(), episodeId)).resolves.toBe(true);
    await clean();
  });
});
