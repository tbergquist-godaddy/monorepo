import DataLoader from 'dataloader';
import * as crosscutting from 'crosscutting';
import faker from 'faker';

import { IEpisode } from '../../infrastructure/entities/episode';
import EpisodeService from '../episode-service';
import { EpisodesLoader } from '../dataloaders/episodes-loader';

const makePastEpisode = (id: number = faker.datatype.number()): IEpisode => {
  const episode: IEpisode = {
    id,
    image: { medium: faker.image.imageUrl(), original: faker.image.imageUrl() },
    name: faker.random.word(),
    season: faker.datatype.number(),
    number: faker.datatype.number(),
    airdate: faker.date.past().toISOString(),
    summary: faker.random.words(),
    tvshowId: faker.datatype.number(),
  };

  return episode;
};

const makeFutureEpisode = (): IEpisode => {
  const episode: IEpisode = {
    id: faker.datatype.number(),
    image: { medium: faker.image.imageUrl(), original: faker.image.imageUrl() },
    name: faker.random.word(),
    season: faker.datatype.number(),
    number: faker.datatype.number(),
    airdate: faker.date.future().toISOString(),
    summary: faker.random.words(),
    tvshowId: faker.datatype.number(),
  };

  return episode;
};

const setup = () => {
  const load = jest.fn();

  const favoriteService = {
    getFavorites: jest.fn(),
    isFavorite: jest.fn(),
    addFavorite: jest.fn(),
    deleteFavorite: jest.fn(),
  };

  const watchedEpisodeService = {
    addWatchedEpisode: jest.fn(),
    deleteWatchedEpisode: jest.fn(),
    isEpisodeWatched: jest.fn(),
  };

  const episodesLoader: EpisodesLoader = new DataLoader(load);
  const service = new EpisodeService({
    episodesLoader,
    favoriteService,
    watchedEpisodeService,
  });

  return {
    service,
    load,
    favoriteService,
    watchedEpisodeService,
  };
};

describe('getByTvshowId', () => {
  it('returns episodes', async () => {
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
});

describe('getNotSeenEpisodes', () => {
  it('returns not seen episodes', async () => {
    const { favoriteService, load, watchedEpisodeService, service } = setup();
    const favorites = [
      {
        id: '1',
        userId: '1',
        serieId: '1',
      },
      {
        id: '2',
        userId: '2',
        serieId: '2',
      },
    ];
    const episodes = [
      makeFutureEpisode(),
      makeFutureEpisode(),
      makeFutureEpisode(),
      makePastEpisode(1),
      makePastEpisode(2),
      makePastEpisode(3),
    ];

    favoriteService.getFavorites.mockResolvedValue(favorites);
    load.mockResolvedValue([episodes, []]);

    watchedEpisodeService.isEpisodeWatched.mockImplementation((id) => {
      return Promise.resolve(id === 2);
    });

    const notSeen = await service.getNotSeenEpisodes('1');

    expect(load).toHaveBeenCalledWith(['1', '2']);
    expect(watchedEpisodeService.isEpisodeWatched).toHaveBeenCalledTimes(3);
    expect(notSeen).toHaveLength(2);
    expect(notSeen).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 3 }),
      ]),
    );
  });
});
