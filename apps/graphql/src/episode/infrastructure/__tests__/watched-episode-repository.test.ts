import * as crosscutting from 'crosscutting';

import WatchedEpisodeRepository from '../watched-episode-repository';

const setup = () => {
  const watchedEpisode = {
    id: '2',
    userId: '3',
    episodeId: 4,
  };
  const create = jest.fn();
  const deleteOne = jest.fn();
  const model: any = {
    create,
    deleteOne,
  };

  const repository = new WatchedEpisodeRepository(model);

  return {
    repository,
    create,
    watchedEpisode,
    deleteOne,
  };
};

describe('addWatchedEpisode', () => {
  it('returns the created object on success', async () => {
    const { create, repository, watchedEpisode } = setup();
    create.mockResolvedValue({ toObject: () => watchedEpisode });

    await expect(repository.addWatchedEpisode('123', 213)).resolves.toEqual(watchedEpisode);
    expect(create).toHaveBeenCalledWith({ userId: '123', episodeId: 213 });
  });

  it('returns null if creation fails', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();
    const { repository, create } = setup();
    const error = new Error('Fail');
    create.mockRejectedValue(error);
    await expect(repository.addWatchedEpisode('123', 123)).resolves.toBeNull();
    expect(spy).toHaveBeenCalledWith('Failed to add episode', error);
    spy.mockRestore();
  });
});

describe('deleteWatchedEpisode', () => {
  it('returns false when deletion fails', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();
    const { deleteOne, repository } = setup();
    const error = new Error('Fail');
    deleteOne.mockRejectedValue(error);

    await expect(repository.deleteWatchedEpisode('123', 123)).resolves.toBe(false);
    expect(deleteOne).toHaveBeenCalledWith({ userId: '123', episodeId: 123 });
    expect(spy).toHaveBeenCalledWith('Failed to delete episode', error);
    spy.mockRestore();
  });

  it('returns false if deletedCount is less than 1', async () => {
    const { deleteOne, repository } = setup();
    deleteOne.mockResolvedValue({ deletedCount: 0 });

    await expect(repository.deleteWatchedEpisode('123', 123)).resolves.toBe(false);
    expect(deleteOne).toHaveBeenCalledWith({ userId: '123', episodeId: 123 });
  });

  it('returns true if deletedCount is greater than 0', async () => {
    const { deleteOne, repository } = setup();
    deleteOne.mockResolvedValue({ deletedCount: 1 });

    await expect(repository.deleteWatchedEpisode('123', 123)).resolves.toBe(true);
    expect(deleteOne).toHaveBeenCalledWith({ userId: '123', episodeId: 123 });
  });
});
