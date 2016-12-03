import {
  action,
  computed,
  observable
} from 'mobx';

import {EpisodeModel} from './';
import moment from 'moment';

class ShowModel {

  @observable id;
  @observable score;
  @observable name;
  @observable status;
  @observable imageUrl;
  @observable summary;
  @observable episodes;


  constructor(show) {
    this.id       = show.id;
    this.score    = show.rating ? show.rating.average : 0;
    this.name     = show.name;
    this.status   = show.status;
    this.imageUrl = show.image ? show.image.medium : null;
    this.summary  = show.summary;
    this.episodes = [];
  }

  @action
  addEpisodes(episodes) {
    episodes.map(episode => {
      this.episodes.push(new EpisodeModel(episode));
    });
  }

  @computed
  get nextEpisode() {
    let next = null;
    this.episodes.forEach(episode => {
      if(!next && moment(episode.airdate) >= moment().set('hour', 0).set('minute', 0).set('second', 0)) {
        next = episode;
      }
      else if(next && moment(episode.airdate) >= moment().set('hour', 0).set('minute', 0).set('second', 0)
        && moment(episode.airdate) < moment(next.airdate)) {
        next = episode;
      }
    });
    return next;
  }

  @computed
  get latestEpisode() {
    let next = null;
    this.episodes.forEach(episode => {
      if(!next && moment(episode.airdate) < moment().set('hour', 0).set('minute', 0).set('second', 0)) {
        next = episode;
      }
      else if(next && moment(episode.airdate) < moment().set('hour', 0).set('minute', 0).set('second', 0)
        && moment(episode.airdate) > moment(next.airdate)) {
        next = episode;
      }
    });
    return next;
  }
}

export default ShowModel;