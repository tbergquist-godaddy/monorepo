// @flow

import Dataloader from 'dataloader';
import { fetch, type SearchTvShowType, type TvShow } from '@tbergq/graphql-services';

const fetchTvShows = async (queries: $ReadOnlyArray<string>) => {
  const responses: $ReadOnlyArray<SearchTvShowType> = await Promise.all(
    queries.map(query =>
      fetch(
        `http://api.tvmaze.com/search/shows?q=${query}&embed[]=nextepisode&embed[]=previousepisode`,
      ),
    ),
  );

  return responses.map(response => response.map(item => item.show));
};

const SearchTvShowLoader = () => new Dataloader<string, Array<TvShow>>(fetchTvShows);

export default SearchTvShowLoader;
