import {
  action,
  observable,
  computed
} from 'mobx';

import {ShowModel} from './models';

class SeriesStore {

  @observable series = [];

  @action
  async searchForSeries(searchText) {

    let response = await fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`);
    let series   = await response.json();
    this.series  = [];
    series.map(serie => {
      this.series.push(new ShowModel(serie.show));
    });
    console.log(series);
  }

  @action
  async getSerie(id) {
    try {
      let serie = this.series.find(serie => serie.id == id);
      let res;
      let episodes;
      let show;
      if (!serie) {
        res   = await fetch(`http://api.tvmaze.com/shows/${id}`);
        show  = await res.json();
        serie = new ShowModel(show);
        this.series.push(serie);
      }
      if (serie.episodes.length === 0) {
        res      = await fetch(`http://api.tvmaze.com/shows/${id}/episodes`);
        episodes = await res.json();
        serie.addEpisodes(episodes);
      }
      return serie;
    }
    catch (error) {
      console.log('fail', error);
    }
  }
}

const seriesStore = new SeriesStore();

export default seriesStore;