import DataLoader from 'dataloader';
import fetch from 'services/fetch';

import { Episode } from '../Episode';

const fetchEpisode = (ids: ReadonlyArray<string>) =>
  Promise.all(ids.map((id) => fetch<Episode>(`http://api.tvmaze.com/episodes/${id}`)));

const EpisodeLoader = (): DataLoader<string, Episode, string> =>
  new DataLoader<string, Episode>(fetchEpisode);

export default EpisodeLoader;
