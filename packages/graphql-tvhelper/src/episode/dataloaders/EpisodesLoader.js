// @flow

import Dataloader from 'dataloader';
import { fetch, type Episode } from '@tbergq/graphql-services';

const fetchEpisodes = async (serieIds: $ReadOnlyArray<string>) => {
  const responses: $ReadOnlyArray<Episode[]> = await Promise.all(
    serieIds.map(id => fetch(`http://api.tvmaze.com/shows/${id}/episodes`)),
  );
  return responses;
};

const TvShowEpisodeLoader = () => new Dataloader<string, Episode[]>(fetchEpisodes);

export default TvShowEpisodeLoader;
