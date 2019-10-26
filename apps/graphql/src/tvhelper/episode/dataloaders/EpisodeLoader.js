// @flow

import Dataloader from 'dataloader';
import { fetch, type Episode } from '@tbergq/graphql-services';

const fetchEpisode = (ids: $ReadOnlyArray<string>) =>
  Promise.all(ids.map(id => fetch(`http://api.tvmaze.com/episodes/${id}`)));

const EpisodeLoader = () => new Dataloader<string, Episode>(fetchEpisode);

export default EpisodeLoader;
