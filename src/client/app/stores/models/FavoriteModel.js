import {
  action,
  computed,
  observable
} from 'mobx';

class FavoriteModel {

  @observable id;

  constructor(favorite) {
    this.id = favorite.id;
  }
}

export default FavoriteModel;