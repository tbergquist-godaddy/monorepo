import * as crosscutting from 'crosscutting';
import { TMDB_API_KEY } from 'environment';
import { server, rest } from 'test/server';

import TvshowRepository from '../tvshow-repository';
import searchTvShowResponse from '../../datasets/searchTvshow.json';
import tvShowById from '../../datasets/tvShowById.json';

const setup = () => {
  // const fetch = jest.fn();
  const baseUrl = 'http://localhost';
  const tvshowRepository = new TvshowRepository(crosscutting.fetch, baseUrl);
  return {
    tvshowRepository,
    baseUrl,
  };
};

describe('search', () => {
  it('fetches tv shows', async () => {
    const { tvshowRepository, baseUrl } = setup();
    const handler = jest.fn((_, res, ctx) => {
      return res(ctx.json(searchTvShowResponse));
    });
    server.use(rest.get(`${baseUrl}/search/tv`, handler));

    const query = 'game of thrones';
    const result = await tvshowRepository.search(query);

    const expectedSearchParams = new URLSearchParams();
    expectedSearchParams.append('query', query);
    expectedSearchParams.append('api_key', TMDB_API_KEY);

    expect(result).toMatchSnapshot();
    expect(handler.mock.calls[0][0].url.searchParams.toString()).toBe(
      expectedSearchParams.toString(),
    );
  });

  it('returns empty array if the request fails', async () => {
    const { tvshowRepository, baseUrl } = setup();
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();
    const error = new Error('error');
    const handler = jest.fn((_, res, ctx) => {
      return res(ctx.status(400), ctx.json(error));
    });
    server.use(rest.get(`${baseUrl}/search/tv`, handler));

    const query = 'game of thrones';
    const result = await tvshowRepository.search(query);

    expect(result).toEqual([]);
    expect(spy).toHaveBeenCalledWith('Failed to fetch tvshows', expect.any(Error));
    spy.mockRestore();
  });
});

describe('getById', () => {
  it('gets a tvshow by id', async () => {
    const { baseUrl, tvshowRepository } = setup();
    const id = 4;
    server.use(
      rest.get(`${baseUrl}/tv/:id`, (_, res, ctx) => {
        return res(ctx.json(tvShowById));
      }),
    );

    await expect(tvshowRepository.getById(id)).resolves.toMatchInlineSnapshot(`
            Object {
              "id": 1405,
              "name": "Dexter",
              "network": Object {
                "id": 67,
                "logo_path": "/Allse9kbjiP6ExaQrnSpIhkurEi.png",
                "name": "Showtime",
                "origin_country": "US",
              },
              "posterPath": "/58H6Ctze1nnpS0s9vPmAAzPcipR.jpg",
              "premiered": "2006-10-01",
              "rating": 8.192,
              "status": "Ended",
              "summary": "Dexter Morgan, a blood spatter pattern analyst for the Miami Metro Police also leads a secret life as a serial killer, hunting down criminals who have slipped through the cracks of justice.",
            }
          `);
  });
});
