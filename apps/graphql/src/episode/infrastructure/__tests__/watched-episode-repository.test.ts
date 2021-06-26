import * as crosscutting from 'crosscutting';

import WatchedEpisodeRepository from '../watched-episode-repository';

const setup = () => {
  const watchedEpisode = {
    id: '2',
    userId: '3',
    episodeId: 4,
  };
  const create = jest.fn();
  const model: any = {
    create,
  };

  const repository = new WatchedEpisodeRepository(model);

  return {
    repository,
    create,
    watchedEpisode,
  };
};

describe('addWatchedEpisode', () => {
  it('returns the created object on success', async () => {
    const { create, repository, watchedEpisode } = setup();
    create.mockResolvedValue({ toObject: () => watchedEpisode });

    expect(await repository.addWatchedEpisode('123', 213)).toEqual(watchedEpisode);
    expect(create).toHaveBeenCalledWith({ userId: '123', episodeId: 213 });
  });

  it('returns null if creation fails', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();
    const { repository, create } = setup();
    const error = new Error('Fail');
    create.mockRejectedValue(error);
    expect(await repository.addWatchedEpisode('123', 123)).toBeNull();
    expect(spy).toHaveBeenCalledWith('Failed to add episode', error);
    spy.mockRestore();
  });
});
