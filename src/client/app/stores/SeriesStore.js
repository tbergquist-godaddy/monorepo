import {
  action,
  observable,
  computed
} from 'mobx';
import appConfig from '../utils/appConfig';

import {ShowModel} from './models';

class SeriesStore {

  @observable series = [];

  @action
  async deleteFavorite(id) {
    try {
      await fetch(`${appConfig.baseUrl}/api/favorites/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        method: 'delete'
      });

      let index = this.series.findIndex(serie => serie.id === id);
      this.series.splice(index, 1);
    }
    catch (err) {
      throw err;
    }
  }

  @action
  async getFavorites() {
    try {
      let response = await fetch(`${appConfig.baseUrl}/api/favorites`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) {
        throw new Error(response);
      }
      let favorites = await response.json();
      this.series   = [];
      favorites.map((favorite) => {
        this.getSerie(favorite.serieId);
      });
      return this.series;
    }
    catch (error) {
      throw error;
    }
  }

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
        res   = await fetch(`http://api.tvmaze.com/shows/${id}?embed[]=episodes`);
        show  = await res.json();
        serie = new ShowModel(show);
        if (show._embedded && show._embedded.episodes) {
          serie.addEpisodes(show._embedded.episodes);
        }
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