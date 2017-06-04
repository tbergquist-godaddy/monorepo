import { STOP_SPINNER, SHOW_SPINNER } from './Spinner.actions';
import Transport from '../utils/Transport';

export const SEARCH_RESULT_SUCCESS = 'SEARCH_RESULT_SUCCESS';

export const searchSeries = searchText => dispatch => {
  dispatch({
    type: SHOW_SPINNER,
  });
  return Transport.call(`series/search/${searchText}`)
    .then(series => {
      dispatch({
        type: SEARCH_RESULT_SUCCESS,
        series,
      });
      dispatch({
        type: STOP_SPINNER,
      });
    });
};
