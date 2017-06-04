import * as actions from '../actions/Spinner.actions';

const initialState = {
  spin: false,
};

export default function spinner(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_SPINNER:
      return {
        spin: true,
      };
    case actions.STOP_SPINNER:
      return {
        spin: false
      };
    default:
      return state;
  }
}
