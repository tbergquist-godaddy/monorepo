import * as actions from '../actions/LoginForm.actions';

const initialState = {
  username: '',
  password: '',
  loginSuccess: false,
  loginError: false,
};

export default function loginForm(state = initialState, action) {

  switch (action.type) {
    case actions.VALUE_CHANGED:
      let newState = Object.assign({}, state, {
        loginSuccess: false,
        loginError: false,
      });
      newState[action.event.target.name] = action.event.target.value;
      return newState;
    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, { loginSuccess: true });
    case actions.LOGIN_FAILED:
      return Object.assign({}, state, { loginError: true });
    default:
      return state;
  }
}
