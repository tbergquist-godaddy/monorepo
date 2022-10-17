import { IImageRepository } from '../../infrastructure/image-repository';
import ImageService from '../image-service';

const setup = () => {
  const repository: IImageRepository = {
    getMediumImage: (path: string) => Promise.resolve(`/medium_mock${path}`),
    getOriginalImage: (path: string) => Promise.resolve(`/original_mock${path}`),
  };
  const service = new ImageService(repository);
  return {
    service,
  };
};

it('returns the medium image', async () => {
  const { service } = setup();
  await expect(service.getMediumImage('/test.jpg')).resolves.toBe('/medium_mock/test.jpg');
});

it('returns the original image', async () => {
  const { service } = setup();
  await expect(service.getOriginalImage('/test.jpg')).resolves.toBe('/original_mock/test.jpg');
});
