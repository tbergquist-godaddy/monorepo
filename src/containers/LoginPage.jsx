import React from 'react';
import Navbar from '../components/Navbar.jsx';
import LoginForm from './LoginForm.jsx';
import Spinner from './spinner/Spinner.jsx';

export default class LoginPage extends React.Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Spinner/>
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 style={{ textAlign: 'center' }}>Log in</h2>
              </div>
              <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                <LoginForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
