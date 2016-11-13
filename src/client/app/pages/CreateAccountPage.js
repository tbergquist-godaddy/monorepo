import React from 'react';
import {observer} from 'mobx-react';
import {
  FlexContainerColumn,
  FlexContainerRow,
  FlexItem,
  MySpinner
} from '../components';
import {observable, action} from 'mobx';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import {UserStore} from '../stores';

@observer
class CreateAccountPage extends React.Component {

  @observable user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  @observable showSpinner = false;

  constructor(props) {
    super(props);

    this.onChange       = this.onChange.bind(this);
    this.onSubmit       = this.onSubmit.bind(this);
    this.setShowSpinner = this.setShowSpinner.bind(this);
  }

  @action
  onChange(e) {
    this.user[e.target.name] = e.target.value;
  }


  async onSubmit(e) {
    e.preventDefault();
    try {
      this.setShowSpinner(true);
      let user = await UserStore.createUser(this.user);
      console.log('success', user);
      alert('success');
    }
    catch (err) {
      alert('failure');
      console.log(err);
    }
    finally {
      this.setShowSpinner(false);
    }
  }

  validateTest() {
    return 'error';
  }

  @action
  setShowSpinner(show) {
    this.showSpinner = show;
  }

  render() {
    return (
      <FlexContainerColumn>
        <FlexContainerRow
          justifyContent="center"
        >
          <h2>Create account</h2>
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
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="text"
                  value={this.user.email}
                  name="email"
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
              <FormGroup>
                <ControlLabel>Confirm password</ControlLabel>
                <FormControl
                  type="password"
                  value={this.user.confirmPassword}
                  name="confirmPassword"
                  onChange={this.onChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <input
                type="submit"
                className="btn btn-primary pull-right"
                value="Save"
              />
            </form>
            <MySpinner spin={this.showSpinner}/>
          </FlexItem>
        </FlexContainerRow>
      </FlexContainerColumn>
    )
  }
}

export default CreateAccountPage;