import searchTvshowResolver from '../search-tv-show-resolver';

const setup = () => {
  const args = {
    query: 'game of thrones',
  };
  const search = jest.fn();
  const tvshowService = {
    search,
  };
  const context: any = {
    tvshowService,
  };
  const resolve = () => searchTvshowResolver(null, args, context);
  return {
    resolve,
    search,
  };
};

it('resolves correctly', async () => {
  const { resolve, search } = setup();
  search.mockResolvedValue([
    {
      id: 1,
      name: 'Game of Thrones',
      status: 'running',
      premiered: '2011-04-17',
      image: { medium: 'mock_medium', original: 'mock_original' },
      rating: 5,
      network: { id: 5, name: 'HBO' },
    },
  ]);
  const result = await resolve();
  expect(result).toMatchSnapshot();
  expect(search).toHaveBeenCalledWith('game of thrones');
});
