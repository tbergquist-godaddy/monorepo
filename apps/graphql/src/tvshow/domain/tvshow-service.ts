import makeDataloader, { SearchTVShowDataloader } from './dataloaders/search-tvshow-dataloader';
import { ITvshowDTO } from './dto/tvshow-dto';

export interface ITvshowService {
  search(query: string): Promise<ITvshowDTO[]>;
}

export default class TvshowServicee implements ITvshowService {
  #searchDataLoader: SearchTVShowDataloader;

  constructor(searchDataLoader: SearchTVShowDataloader = makeDataloader()) {
    this.#searchDataLoader = searchDataLoader;
  }

  search(query: string): Promise<ITvshowDTO[]> {
    return this.#searchDataLoader.load(query);
  }
}
