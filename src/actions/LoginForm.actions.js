import Transport from '../utils/Transport';

export const VALUE_CHANGED = 'VALUE_CHANGED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const valueChanged = event => ({
  type: VALUE_CHANGED,
  event,
});

export const login = (username, password) => dispatch =>
  Transport.call(`auth`, {
    method: 'POST',
    body: {
      username,
      password,
    }
  })
    .then(token => {
      Transport.setToken(token);
      dispatch({
        type: LOGIN_SUCCESS,
        token,
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILED,
        err,
      });
    });
