import {
  action,
  computed,
  observable
} from 'mobx';
import {ShowModel} from './models';
import appConfig from '../utils/appConfig';


class FavoritesStore {

  @observable favorites = [];

  @action
  async addToFavorites(id) {
    try {
      let response = await fetch(`${appConfig.baseUrl}/api/favorites`, {
        method : 'post',
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`,
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({serieId : id})
      });
      if(!response.ok) {
        console.log('response not ok', response);
        throw new Error(response);
      }
      let reply = await response.json();
      return reply;
    }
    catch (error) {
      console.log('error', error);
      throw error;
    }
  }

  @action
  async getFavorites() {
    try {
      let response = await fetch(`${appConfig.baseUrl}/api/favorites`, {
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      });
      if(!response.ok) {
        throw new Error(response);
      }
      let favorites = await response.json();
      favorites.map((favorite) => {
        this.favorites.push(new ShowModel(favorite));
      });
      return this.favorites;
    }
    catch (error) {
      throw error;
    }
  }

  async isFavorite(id) {
    try {
      let response = await fetch(`${appConfig.baseUrl}/api/favorites/isFavorite/${id}`, {
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      });
      if(!response.ok) {
        throw new Error(response);
      }
      let data = await response.json();
      return data.isFavorite;
    }
    catch(err) {
      throw err;
    }
  }



}

const favoritesStore = new FavoritesStore();

export default favoritesStore;