import * as actions from '../actions/SearchForm.actions';

const initialState = {
  name: '',
};

export default function searchFormReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SEARCH_TEXT_CHANGE:
      return {
        name: action.event.target.value,
      };
    default:
      return state;
  }
};

