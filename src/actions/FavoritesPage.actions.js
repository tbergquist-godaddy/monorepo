import { SHOW_SPINNER, STOP_SPINNER } from './Spinner.actions';
import Transport from '../utils/Transport';
import alertify from 'alertifyjs';

export const LOAD_FAVORITES_SUCCESS = 'LOAD_FAVORITES_SUCCESS';
export const LOAD_FAVORITES_ERROR = 'LOAD_FAVORITES_ERROR';
export const DELETE_FAVORITE_SUCCESS = 'DELETE_FAVORITE_SUCCESS';
export const SORT_FAVORITES = 'SORT_FAVORITES';

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

export const deleteFavorite = id => dispatch => {
  dispatch({ type: SHOW_SPINNER });
  return Transport.call(`favorites/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      dispatch({ type: STOP_SPINNER });
      dispatch({ type: DELETE_FAVORITE_SUCCESS, id });
    })
    .catch(() => {
      dispatch({ type: STOP_SPINNER });
      alertify.notify('Failed to delete favorite', 'danger', 5);
    });
};

export const sortFavorites = property => ({
  type: SORT_FAVORITES,
  property,
});
