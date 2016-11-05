import {observer} from 'mobx-react';
import {observable, action, computed} from 'mobx';


class UserStore {

  @observable token = null;

  constructor() {
    const token = localStorage.getItem('token');
    this.setToken = ::this.setToken;

    if (token) {
      this.setToken(token)
    }

  }

  @computed
  get isAuthenticated() {
    return this.token != null;
  }

  @action
  setToken(token) {
    this.token = token;
  }



}

export default UserStore;