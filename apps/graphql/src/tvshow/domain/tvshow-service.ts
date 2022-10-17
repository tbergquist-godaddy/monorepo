import { IEpisodeService, IEpisodeDTO } from 'episode';

import makeSearchDataloader, {
  SearchTVShowDataloader,
} from './dataloaders/search-tvshow-dataloader';
import makeTvDetailLoader, { TvDetailLoader } from './dataloaders/tv-detail-dataloader';
import { ITvshowDTO } from './dto/tvshow-dto';

export interface ITvshowService {
  search(query: string): Promise<ITvshowDTO[]>;
  getById(id: number): Promise<ITvshowDTO | null>;
  getByIds(ids: ReadonlyArray<number>): Promise<Array<ITvshowDTO | null>>;
}

export default class TvshowService implements ITvshowService {
  #searchDataLoader: SearchTVShowDataloader;
  #tvDetailLoader: TvDetailLoader;

  constructor(
    searchDataLoader: SearchTVShowDataloader = makeSearchDataloader(),
    tvDetailLoader: TvDetailLoader = makeTvDetailLoader(),
  ) {
    this.#searchDataLoader = searchDataLoader;
    this.#tvDetailLoader = tvDetailLoader;
  }

  getById(id: number): Promise<ITvshowDTO | null> {
    return this.#tvDetailLoader.load(id);
  }

  async getByIds(ids: ReadonlyArray<number>): Promise<Array<ITvshowDTO | null>> {
    const tvshows = await this.#tvDetailLoader.loadMany(ids);

    return tvshows.map((tvshow: ITvshowDTO | null | Error) => {
      if (tvshow == null || tvshow instanceof Error) {
        return null;
      }
      return {
        ...tvshow,
        nextEpisode: tvshow.nextEpisode,
        previousEpisode: tvshow.previousEpisode,
      };
    });
  }

  search(query: string): Promise<ITvshowDTO[]> {
    return this.#searchDataLoader.load(query);
  }
}
