import { STOP_SPINNER, SHOW_SPINNER } from './Spinner.actions';
import Transport from '../utils/Transport';

export const LOAD_SERIE_SUCCESS = 'LOAD_SERIE_SUCCESS';
export const IS_FAVORITE_SUCCESS = 'IS_FAVORITE_SUCCESS';

export const loadSerie = id => dispatch => {
  dispatch({ type: SHOW_SPINNER });
  return Transport.call(`series/${id}`)
    .then(serie => {
      dispatch({
        type: LOAD_SERIE_SUCCESS,
        serie,
      });
      dispatch({ type: STOP_SPINNER });
    })
    .catch(err => {
      dispatch({ type: STOP_SPINNER });
    });
};

export const isFavorite = id => dispatch =>
  Transport.call(`favorites/isFavorite/${id}`)
    .then(response => {
      dispatch({
        type: IS_FAVORITE_SUCCESS,
        isFavorite: response.isFavorite
      });
    });
