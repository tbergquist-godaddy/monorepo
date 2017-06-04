import { SHOW_SPINNER, STOP_SPINNER } from './Spinner.actions';
import Transport from '../utils/Transport';

export const LOAD_FAVORITES_SUCCESS = 'LOAD_FAVORITES_SUCCESS';
export const LOAD_FAVORITES_ERROR = 'LOAD_FAVORITES_ERROR';

export const fetchFavorites = () => dispatch => {
  dispatch({
    type: SHOW_SPINNER,
  });
  return Transport.call(`favorites`)
    .then(favorites => {
      dispatch({
        type: LOAD_FAVORITES_SUCCESS,
        favorites
      });
      dispatch({
        type: STOP_SPINNER,
      });
    })
    .catch(err => {
      Transport.clearToken();
      dispatch({
        type: LOAD_FAVORITES_ERROR,
        err,
      });
      dispatch({
        type: STOP_SPINNER,
      });
    });
};