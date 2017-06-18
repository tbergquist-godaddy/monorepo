import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import Spinner from './spinner/Spinner.jsx';
import Translate from '../utils/Translate';
import CreateAccountForm from './CreateAccountForm.jsx';

class CreateAccountPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Spinner/>
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center">
                <h2>{Translate('containers.CreateAccountPage.header')}</h2>
              </div>
              <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                <CreateAccountForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//const mapStateToProps = (state, ownProps) => {

//};

export default CreateAccountPage//connect(mapStateToProps)();
