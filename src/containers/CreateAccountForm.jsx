import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormField from '../components/FormField.jsx';
import { valueChanged, submitForm } from '../actions/CreateAccountForm.actions';
import Translate from '../utils/Translate';
import alertify from 'alertifyjs';
import { withRouter } from 'react-router-dom';

class CreateAccountForm extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { postFailure, postSuccess, history } = nextProps;

    if (postSuccess) {
      alertify.notify(Translate('containers.CreateAccountForm.successMessage'), 'success', 5);
      history.push('/login');
    }
    if (postFailure) {
      alertify.notify(Translate('containers.CreateAccountForm.errorMessage'), 'error', 5);
    }
  }

  onChange(e) {
    const { dispatch } = this.props;
    dispatch(valueChanged(e));
  }

  onSubmit(e) {
    const { dispatch, username, password, confirmPassword, email } = this.props;
    e.preventDefault();

    if (!this.validatePassword()) {
      return false;
    }

    dispatch(submitForm({ username, password, confirmPassword, email }));
  }

  validatePassword() {
    const { password, confirmPassword } = this.props;
    let equal = password === confirmPassword;

    if (!equal) {
      // TODO: add an action for this
      alertify.notify('Password and confirm password does not match', 'error', 5);
    }

    return equal;
  }

  render() {
    const { username, password, confirmPassword, email } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <FormField
          labelText={Translate(`containers.CreateAccountForm.username`)}
          type="text"
          name="username"
          value={username}
          placeholder={Translate(`containers.CreateAccountForm.username`)}
          onChange={this.onChange}
        />
        <FormField
          labelText={Translate(`containers.CreateAccountForm.email`)}
          type="email"
          name="email"
          value={email}
          placeholder={Translate(`containers.CreateAccountForm.email`)}
          onChange={this.onChange}
        />
        <FormField
          labelText={Translate(`containers.CreateAccountForm.password`)}
          type="password"
          name="password"
          value={password}
          placeholder={Translate(`containers.CreateAccountForm.password`)}
          onChange={this.onChange}
        />
        <FormField
          labelText={Translate(`containers.CreateAccountForm.confirmPassword`)}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder={Translate(`containers.CreateAccountForm.confirmPassword`)}
          onChange={this.onChange}
        />
        <div className="form-group">
          <input type="submit" className="btn btn-primary pull-right"
            value={Translate('general.submit')}/>
        </div>
      </form>
    );
  }
}

CreateAccountForm.PropTypes = {
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { username, password, confirmPassword, email, postFailure, postSuccess } = state.CreateAccountForm;

  return { username, password, confirmPassword, email, postFailure, postSuccess };
};

export default connect(mapStateToProps)(withRouter(CreateAccountForm));
