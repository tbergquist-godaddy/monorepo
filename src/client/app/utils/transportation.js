// const BASE_URL = 'http://localhost:9005';
const BASE_URL = 'https://tv-helper-backend.herokuapp.com';

class Transportation {

  async call(url, params) {
    let token = localStorage.getItem('token');
    if (!params) {
      params = {};
    }
    if (typeof params.headers === 'undefined') {
      params.headers = {};
    }
    if (token) {
      params.headers['Authorization'] = `Bearer ${token}`;
    }
    if (!params.headers['Content-Type']) {
      params.headers['Content-Type'] = 'application/json';
    }
    if (!params.headers['Accept']) {
      params.headers['Accept'] = 'application/json';
    }
    try {
      let response = await fetch(`${BASE_URL}${url}`, params);

      if (response.code === 204) {
        return null;
      }
      if (!response.ok) {
        throw new Error(response);
      }
      let json = await response.json();
      return json;
    }
    catch (err) {
      throw err;
    }
  }
}

const transportation = new Transportation();

export default transportation;