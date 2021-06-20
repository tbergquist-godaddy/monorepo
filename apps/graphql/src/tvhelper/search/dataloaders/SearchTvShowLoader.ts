import DataLoader from 'dataloader';
import { fetch } from '@tbergq/graphql-services';

import type { SearchTvShowType } from '../Search';
import type { TvShow } from '../../tvshow/TvShow';

const fetchTvShows = async (queries: ReadonlyArray<string>) => {
  const responses: ReadonlyArray<SearchTvShowType> = await Promise.all(
    queries.map((query) =>
      fetch(
        `http://api.tvmaze.com/search/shows?q=${query}&embed[]=nextepisode&embed[]=previousepisode`,
      ),
    ),
  );

  return responses.map((response) => response.map((item) => item.show));
};

const SearchTvShowLoader = (): DataLoader<string, Array<TvShow>, string> =>
  new DataLoader<string, Array<TvShow>>(fetchTvShows);

export default SearchTvShowLoader;
