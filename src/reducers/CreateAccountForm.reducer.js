import * as actions from '../actions/CreateAccountForm.actions';

const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  postFailure: false,
  postSuccess: false,
};

export default function createAccountForm(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_ACCOUNT_FIELD_CHANGED:
      let newState = Object.assign({}, state);
      newState[action.event.target.name] = action.event.target.value;
      return newState;
    case actions.CREATE_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        postFailure: false,
        postSuccess: true,
      });
    case actions.CREATE_ACCOUNT_ERROR:
      return Object.assign({}, state, {
        postFailure: true,
        postSuccess: false,
      });
    default:
      return state;
  }
}
