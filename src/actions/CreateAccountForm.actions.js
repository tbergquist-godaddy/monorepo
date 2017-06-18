import Transport from '../utils/Transport';
import { STOP_SPINNER, SHOW_SPINNER } from './Spinner.actions';

export const CREATE_ACCOUNT_FIELD_CHANGED = 'CREATE_ACCOUNT_FIELD_CHANGED';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_ERROR = 'CREATE_ACCOUNT_ERROR';

export const valueChanged = event => ({
  type: CREATE_ACCOUNT_FIELD_CHANGED,
  event,
});

export const submitForm = body => dispatch => {
  dispatch({
    type: SHOW_SPINNER
  });
  return Transport.call(`users`, {
    method: 'POST',
    body,
  })
    .then(res => {
      dispatch({
        type: CREATE_ACCOUNT_SUCCESS,
        res,
      });
      dispatch({
        type: STOP_SPINNER
      });
    })
    .catch(err => {
      dispatch({
        type: CREATE_ACCOUNT_ERROR,
        err,
      });
      dispatch({
        type: STOP_SPINNER
      });
    });

};