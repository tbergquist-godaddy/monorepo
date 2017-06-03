import Transport from '../utils/Transport';

export const SEARCH_RESULT_SUCCESS = 'SEARCH_RESULT_SUCCESS';

export const searchSeries = searchText => dispatch =>
  Transport.call(`series/search/${searchText}`)
    .then(series => {
      dispatch({
        type: SEARCH_RESULT_SUCCESS,
        series,
      });
    });