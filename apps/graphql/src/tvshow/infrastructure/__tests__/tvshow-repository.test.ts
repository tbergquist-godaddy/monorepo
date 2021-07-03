import * as crosscutting from 'crosscutting';

import TvshowRepository from '../tvshow-repository';
import searchTvShowResponse from '../../datasets/searchTvshow.json';

const setup = () => {
  const fetch = jest.fn();
  const tvshowRepository = new TvshowRepository(fetch, 'http://localhost');
  return {
    tvshowRepository,
    fetch,
  };
};

describe('search', () => {
  it('fetches tv shows', async () => {
    const { tvshowRepository, fetch } = setup();
    fetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(searchTvShowResponse),
      });
    });

    const query = 'game of thrones';
    const result = await tvshowRepository.search(query);

    expect(result).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledWith('http://localhost/search/shows?q=game%20of%20thrones');
  });

  it('returns empty array if the request fails', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();
    const { tvshowRepository, fetch } = setup();
    const error = new Error('error');
    fetch.mockImplementation(() => {
      return Promise.reject(error);
    });

    const query = 'game of thrones';
    const result = await tvshowRepository.search(query);

    expect(result).toEqual([]);
    expect(spy).toHaveBeenCalledWith('Failed to fetch tvshows', error);
    spy.mockRestore();
  });
});
