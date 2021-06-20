import DataLoader from 'dataloader';
import { fetch } from '@tbergq/graphql-services';

import { Episode } from '../Episode';

const fetchEpisodes = async (serieIds: ReadonlyArray<string>) => {
  const responses: ReadonlyArray<Episode[]> = await Promise.all(
    serieIds.map((id) => fetch(`http://api.tvmaze.com/shows/${id}/episodes`)),
  );
  return responses;
};

const TvShowEpisodeLoader = (): DataLoader<string, Array<Episode>, string> =>
  new DataLoader<string, Episode[]>(fetchEpisodes);

export default TvShowEpisodeLoader;
