import React from 'react';
import styles from '../app.scss';
import {Link} from 'react-router'
import {observer} from 'mobx-react';
import {
  FlexContainerColumn,
  FlexContainerRow,
  FlexItem,
  Toast
} from '../components';
import {
  action,
  observable
} from 'mobx';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import {UserStore} from '../stores';


@observer
class LoginPage extends React.Component {

  @observable user      = null;
  @observable showToast = false;
  @observable toastText = '';

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.user = {
      username: '',
      password: ''
    };
  }

  @action
  onChange(e) {
    this.user[e.target.name] = e.target.value;
  }

  @action
  async onSubmit(e) {
    e.preventDefault();
    try {
      let token = await UserStore.login(this.user.username, this.user.password);
      this.user = {
        username: '',
        password: ''
      };

      this.toastText = 'Login succeded';
    }
    catch (error) {
      this.toastText = 'Login failed';
      console.log('error', error);
    }
    finally {
      this.showToast = true;
    }
  }

  render() {
    return (
      <FlexContainerColumn>
        <FlexContainerRow
          justifyContent="center"
        >
          <h2>Log in</h2>
        </FlexContainerRow>
        <FlexContainerRow
          justifyContent="center"
        >

          <FlexItem flex="50">
            <form onSubmit={this.onSubmit}>
              <FormGroup
              >
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type="text"
                  value={this.user.username}
                  name="username"
                  onChange={this.onChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={this.user.password}
                  name="password"
                  onChange={this.onChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <input
                type="submit"
                value="Log in"
                className="btn btn-primary pull-right"
              />
            </form>
          </FlexItem>
        </FlexContainerRow>
        <Toast
          visible={this.showToast}
          text={this.toastText}
          callback={() => this.showToast = false}
        />
      </FlexContainerColumn>
    )
  }
}

export default LoginPage;