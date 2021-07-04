import DataLoader from 'dataloader';
import * as crosscutting from 'crosscutting';

import EpisodeService from '../episode-service';
import { EpisodesLoader } from '../dataloaders/episodes-loader';

const setup = () => {
  const load = jest.fn();
  const episodeLoader: EpisodesLoader = new DataLoader(load);
  const service = new EpisodeService(episodeLoader);

  return {
    service,
    load,
  };
};

it('returns tv shows', async () => {
  const { service, load } = setup();
  const episode = {
    id: 1,
    name: 'Game of Thrones',
    image: { original: 'https://example.com/image.jpg', medium: 'https://example.jpg' },
    season: 1,
    number: 1,
    airdate: '2020-01-01',
    summary: 'boring',
  };

  load.mockResolvedValue([[episode]]);

  expect(await service.getByTvshowId(123)).toEqual([
    {
      ...episode,
      seasonAndNumber: 'S01E01',
    },
  ]);
});

it('handles errors', async () => {
  const spy = jest.spyOn(crosscutting, 'log').mockImplementation();
  const { service, load } = setup();
  const error = new Error('error');
  load.mockRejectedValue(error);
  expect(await service.getByTvshowId(123)).toEqual([]);
  expect(spy).toHaveBeenCalledWith('Failed to fetch episodes', { tvshowId: 123 }, error);
  spy.mockRestore();
});
