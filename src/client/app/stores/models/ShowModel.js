import {
  action,
  computed,
  observable
} from 'mobx';

import {EpisodeModel} from './';

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
    this.score    = show.rating.average;
    this.name     = show.name;
    this.status   = show.status;
    this.imageUrl = show.image ? show.image.medium : null;
    this.summary  = show.summary;
    this.episodes = [];
  }

  @action
  addEpisodes(episodes) {
    console.log('adding episodes');
    episodes.map(episode => {
      console.log('episode', episode);
      this.episodes.push(new EpisodeModel(episode));
    });
  }
}

export default ShowModel;