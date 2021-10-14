import Dataloader from 'dataloader';

import WatchedEpisodeService, { IWatchedEpisodeService } from '../watched-episode-service';
import { EpisodeWatchedLoader } from '../dataloaders/episode-watched-loader';

const setup = () => {
  const userId = '123';
  const loader = jest.fn();
  const dataloader: EpisodeWatchedLoader = new Dataloader(loader);
  const repository: IWatchedEpisodeService = new WatchedEpisodeService(userId, dataloader);
  return {
    repository,
    loader,
    userId,
  };
};

it('gets a watched episode without date', async () => {
  const { repository, loader, userId } = setup();
  const episodeId = 4;
  const id = '123';
  loader.mockResolvedValue([
    {
      id,
      userId,
      episodeId,
    },
  ]);

  await expect(repository.getWatchedEpisode(episodeId)).resolves.toEqual({
    id,
    userId,
    episodeId,
    date: undefined,
  });
});

it('gets a watched episode with date', async () => {
  const { repository, loader, userId } = setup();
  const episodeId = 4;
  const id = '123';
  const date = new Date(2000, 0, 1, 0, 0, 0, 0);
  loader.mockResolvedValue([
    {
      id,
      userId,
      episodeId,
      createdAt: date,
    },
  ]);

  await expect(repository.getWatchedEpisode(episodeId)).resolves.toEqual({
    id,
    userId,
    episodeId,
    date,
  });
});

it('returns null when no episode is found', async () => {
  const { repository, loader } = setup();
  loader.mockResolvedValue([undefined]);
  const episodeId = 4;
  await expect(repository.getWatchedEpisode(episodeId)).resolves.toBeNull();
});
