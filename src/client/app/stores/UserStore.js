import {observer} from 'mobx-react';
import {observable, action, computed} from 'mobx';
import config from '../utils/appConfig';
import {Transportation} from '../utils';
import jwtDecode from 'jwt-decode';

class UserStore {

  @observable username = null;

  constructor() {
    let token = localStorage.getItem('token');
    if (token) {
      let decoded   = jwtDecode(token);
      this.username = decoded.username;
    }
  }

  @action
  async createUser(user) {
    try {
      let response = await Transportation.call(`/api/users`, {
        method: 'post',
        body: JSON.stringify(user)
      });
      if (!response.ok) {
        throw new Error(response);
      }
      let serverUser = await response.json();
      return serverUser;
    }
    catch (err) {
      throw err;
    }
  }

  async isLoggedIn() {
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    try {
      let user = Transportation.call('/api/auth/me');
      console.log('user', user);
      return true;
    }
    catch (err) {
      return false;
    }
  }

  @action
  async login(username, password) {
    try {
      let token = await Transportation.call(`/api/auth`, {
        method: 'post',
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      localStorage.setItem('token', token);
      let decoded   = jwtDecode(token);
      this.username = decoded.username;

      return token;
    }
    catch (error) {
      throw error;
    }
  }

  @action
  logout() {
    localStorage.removeItem('token');
    this.username = null;
  }

}

const userStore = new UserStore();

export default userStore;