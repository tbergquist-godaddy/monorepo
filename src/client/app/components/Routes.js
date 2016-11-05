import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import LoginPage from '../pages/LoginPage';

class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LoginPage}/>
        <Route path="home" component={App}>

        </Route>
      </Router>
    )
  }
}

export default Routes;