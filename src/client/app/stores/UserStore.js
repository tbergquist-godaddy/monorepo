import {observer} from 'mobx-react';
import {observable, action, computed} from 'mobx';
import config from '../utils/appConfig';
import {Transportation} from '../utils';

class UserStore {


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
      // create later
      throw new Error('Not yet implemented');
    }
    catch (err) {
      throw err;
    }
  }

  async login(username, password) {
    try {
      let token = await Transportation.call(`/api/auth`, {
        method: 'post',
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      console.log('token', token);
      localStorage.setItem('token', token);
      return token;
    }
    catch (error) {
      throw error;
    }
  }

}

const userStore = new UserStore();

export default userStore;