import { rest, server } from 'test/server';

import ImageRepository from '../image-repository';
import mockResponse from '../datasets/config-mock.json';

const setup = () => {
  const repository = new ImageRepository('http://localhost/api');

  server.use(
    rest.get('http://localhost/api/configuration', (_, res, ctx) => {
      return res(ctx.json(mockResponse));
    }),
  );
  return {
    repository,
  };
};

it('resolves the medium image correctly', async () => {
  const { repository } = setup();
  await expect(repository.getMediumImage('/img1.jpg')).resolves.toBe(
    'https://image.tmdb.org/t/p/w342/img1.jpg',
  );
});

it('resolves the original image correctly', async () => {
  const { repository } = setup();
  await expect(repository.getOriginalImage('/img1.jpg')).resolves.toBe(
    'https://image.tmdb.org/t/p/original/img1.jpg',
  );
});
