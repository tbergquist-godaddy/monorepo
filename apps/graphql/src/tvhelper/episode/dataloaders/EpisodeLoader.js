// @flow

import Dataloader from 'dataloader';
import { fetch } from '@tbergq/graphql-services';

import { type Episode } from '../Episode';

const fetchEpisode = (ids: $ReadOnlyArray<string>) =>
  Promise.all(ids.map(id => fetch(`http://api.tvmaze.com/episodes/${id}`)));

const EpisodeLoader = () => new Dataloader<string, Episode>(fetchEpisode);

export default EpisodeLoader;
