import ImageRepository, { IImageRepository } from '../infrastructure/image-repository';

export interface IImageService {
  getMediumImage: (path: string) => Promise<string>;
  getOriginalImage: (path: string) => Promise<string>;
}

export default class ImageService implements IImageService {
  #repository: IImageRepository;
  constructor(repository: IImageRepository = new ImageRepository()) {
    this.#repository = repository;
  }

  getMediumImage: (path: string) => Promise<string> = (path: string) =>
    this.#repository.getMediumImage(path);

  getOriginalImage: (path: string) => Promise<string> = (path: string) =>
    this.#repository.getOriginalImage(path);
}
