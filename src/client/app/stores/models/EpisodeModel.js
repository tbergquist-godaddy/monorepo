import {
  action,
  computed,
  observable
} from 'mobx';

class EpisodeModel {

  @observable id;
  @observable airdate;
  @observable summaryHtml;
  @observable season;
  @observable episode;

  constructor(episode) {
    this.id          = episode.id;
    this.airdate     = episode.airdate;
    this.summaryHtml = episode.summary;
    this.season      = episode.season;
    this.episode     = episode.number;
  }

  @computed
  get name() {
    let episode = this.episode < 10 ? `0${this.episode}` : this.episode;
    let season  = this.season < 10 ? `0${this.season}` : this.season;
    return `s${season}e${episode}`;
  }

  @computed
  get summary() {
    return {
      __html: this.summaryHtml
    };
  }
}

export default EpisodeModel;