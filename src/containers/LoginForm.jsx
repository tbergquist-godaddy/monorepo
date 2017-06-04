import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/LoginForm.actions';
import { withRouter } from 'react-router-dom';
import alertify from 'alertifyjs';
import FormField from '../components/FormField.jsx';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { loginError, loginSuccess, history } = nextProps;

    if (loginSuccess) {
      history.push('/favorites');
    }
    else if (loginError) {
      alertify.notify('Wrong username or password', 'error', 5);
    }
  }

  onChange(e) {
    const { dispatch } = this.props;
    dispatch(actions.valueChanged(e));
  }

  onSubmit(e) {
    e.preventDefault();
    const { dispatch, username, password } = this.props;

    dispatch(actions.login(username, password));
  }

  render() {
    const { username, password } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <FormField
          name="username"
          value={username}
          onChange={this.onChange}
          labelText="Username"
        />
        <FormField
          name="password"
          value={password}
          onChange={this.onChange}
          labelText="Password"
          type="password"
        />
        <div className="form-group">
          <input type="submit" className="btn btn-primary pull-right" value="Log in"/>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  username: state.LoginForm.username,
  password: state.LoginForm.password,
  loginSuccess: state.LoginForm.loginSuccess,
  loginError: state.LoginForm.loginError,
});

export default connect(mapStateToProps)(withRouter(LoginForm));
