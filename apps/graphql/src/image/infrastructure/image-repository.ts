/* eslint-disable camelcase */

import makeConfigLoader, { ConfigurationDataloader } from './dataloaders/config-loader';

export interface IImageRepository {
  getMediumImage: (path: string) => Promise<string>;
  getOriginalImage: (path: string) => Promise<string>;
}

export default class ImageRepository implements IImageRepository {
  #baseUrl: string;
  #dataloader: ConfigurationDataloader;

  constructor(baseUrl = 'https://api.themoviedb.org/3') {
    this.#baseUrl = baseUrl;
    this.#dataloader = makeConfigLoader();
  }

  getMediumImage: (path: string) => Promise<string> = async (path: string) => {
    const {
      images: { secure_base_url, poster_sizes },
    } = await this.#dataloader.load(this.#baseUrl);
    const size = poster_sizes[Math.floor(poster_sizes.length / 2)];
    return `${secure_base_url}${size}${path}`;
  };

  getOriginalImage: (path: string) => Promise<string> = async (path: string) => {
    const {
      images: { secure_base_url, poster_sizes },
    } = await this.#dataloader.load(this.#baseUrl);
    const size = poster_sizes.pop();
    return `${secure_base_url}${size}${path}`;
  };
}
