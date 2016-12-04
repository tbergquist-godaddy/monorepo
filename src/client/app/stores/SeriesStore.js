import {
  action,
  observable,
  computed
} from 'mobx';
import appConfig from '../utils/appConfig';
import {Transportation} from '../utils';

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
      let favorites = await Transportation.call(`/api/favorites`);
      this.series   = [];

      favorites.forEach(favorite => {
        let serie = new ShowModel(favorite);
        serie.addEpisodes(favorite._embedded.episodes);
        this.series.push(serie);
      });

    }
    catch (error) {
      throw error;
    }
  }

  @action
  async searchForSeries(searchText) {

    let series  = await Transportation.call(`/api/series/search/${searchText}`);
    this.series = [];
    series.map(serie => {
      this.series.push(new ShowModel(serie.show));
    });
  }

  @action
  async getSerie(id) {
    try {
      let serie = this.series.find(serie => serie.id == id);
      let res;
      let episodes;
      let show;

      if (!serie) {
        show  = await Transportation.call(`/api/series/${id}`);
        serie = new ShowModel(show);
        if (show._embedded && show._embedded.episodes) {
          serie.addEpisodes(show._embedded.episodes);
        }
        this.series.push(serie);
      }
      if (serie.episodes.length === 0) {
        episodes = await Transportation.call(`/api/series/${id}/episodes`);
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