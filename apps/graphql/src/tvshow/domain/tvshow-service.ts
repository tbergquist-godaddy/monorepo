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

type NextAndPreviousData = { id: number; next: Date | null; previous: Date | null };

export default class TvshowService implements ITvshowService {
  #episodeService: IEpisodeService;
  #searchDataLoader: SearchTVShowDataloader;
  #tvDetailLoader: TvDetailLoader;

  constructor(
    episodeService: IEpisodeService,
    searchDataLoader: SearchTVShowDataloader = makeSearchDataloader(),
    tvDetailLoader: TvDetailLoader = makeTvDetailLoader(),
  ) {
    this.#episodeService = episodeService;
    this.#searchDataLoader = searchDataLoader;
    this.#tvDetailLoader = tvDetailLoader;
  }

  getById(id: number): Promise<ITvshowDTO | null> {
    return this.#tvDetailLoader.load(id);
  }

  async getNextEpisode(id: number): Promise<Date | null> {
    const episodes = await this.#episodeService.getByTvshowId(id);

    const today = new Date();
    const utcToday = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    const dates = episodes.reduce((acc: ReadonlyArray<number>, curr: IEpisodeDTO) => {
      if (curr.airdate == null) {
        return acc;
      }
      const airdate = new Date(curr.airdate);

      if (airdate >= utcToday) {
        return [...acc, airdate.getTime()];
      }
      return acc;
    }, []);

    const date = dates.length > 0 ? new Date(Math.min(...dates)) : null;

    return date;
  }

  async getPreviousEpisode(id: number): Promise<Date | null> {
    const episodes = await this.#episodeService.getByTvshowId(id);
    const today = new Date();
    const tomorrow = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() + 1));

    const dates = episodes.reduce((acc: ReadonlyArray<number>, curr: IEpisodeDTO) => {
      if (curr.airdate == null) {
        return acc;
      }
      const airdate = new Date(curr.airdate);
      if (airdate < tomorrow) {
        return [...acc, airdate.getTime()];
      }
      return acc;
    }, []);

    const date = dates.length > 0 ? new Date(Math.max(...dates)) : null;

    return date;
  }

  async getNextAndPreviousEpisode(id: number): Promise<NextAndPreviousData> {
    const [next, previous] = await Promise.all([
      this.getNextEpisode(id),
      this.getPreviousEpisode(id),
    ]);
    return {
      id,
      next,
      previous,
    };
  }

  async getByIds(ids: ReadonlyArray<number>): Promise<Array<ITvshowDTO | null>> {
    const [tvshows, ...nextAndPrev] = await Promise.all<any>([
      this.#tvDetailLoader.loadMany(ids),
      ...ids.map((id) => this.getNextAndPreviousEpisode(id)),
    ]);

    return tvshows.map((tvshow: ITvshowDTO | null | Error) => {
      if (tvshow == null || tvshow instanceof Error) {
        return null;
      }
      // @ts-ignore: Signature '(this: void, { id }: any): boolean' must be a type predicate. 🤔
      const data = nextAndPrev.find<NextAndPreviousData>(({ id }) => id === tvshow.id);
      return {
        ...tvshow,
        nextEpisode: data?.next ?? null,
        previousEpisode: data?.previous ?? null,
      };
    });
  }

  search(query: string): Promise<ITvshowDTO[]> {
    return this.#searchDataLoader.load(query);
  }
}
