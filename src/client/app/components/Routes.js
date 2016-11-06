import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import LoginPage from '../pages/LoginPage';
import {
  SearchPage,
  SerieInformationPage
} from '../pages';

class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LoginPage}/>

        <Route path="home" component={App}>
          <IndexRoute component={SearchPage} />
          <Route path="/series/:id" component={SerieInformationPage} />
        </Route>

      </Router>
    )
  }
}

export default Routes;