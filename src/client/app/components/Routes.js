import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import {
  SearchPage,
  SerieInformationPage,
  CreateAccountPage,
  LoginPage,
  FavoritesPage,
  AboutPage
} from '../pages';

class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>

        <Route path="/" component={App}>
          <IndexRoute component={SearchPage}/>
          <Route path="/series/:id" component={SerieInformationPage}/>
          <Route path="/account/create" component={CreateAccountPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/favorites" component={FavoritesPage}/>
          <Route path="/about" component={AboutPage}/>
        </Route>

      </Router>
    )
  }
}

export default Routes;