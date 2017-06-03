import * as actions from '../actions/SearchPage.actions';

const initialState = {
  series: [],
};

export default function searchPage(state = initialState, action) {
  switch (action.type) {
    case actions.SEARCH_RESULT_SUCCESS:
      return {
        series: action.series,
      };
    default:
      return state;
  }
}
