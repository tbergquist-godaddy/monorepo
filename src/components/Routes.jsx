import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { Route, Switch } from 'react-router';
import React from 'react';
import HelloWorld from './HelloWorld.jsx';
import SearchPage from '../containers/SearchPage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import FavoritesPage from '../containers/FavoritesPage.jsx';
import SeriesPage from '../containers/SeriesPage.jsx';
import CreateAccountPage from '../containers/CreateAccountPage.jsx';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(middleware),
  applyMiddleware(thunk),
);

export default class Routes extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={SearchPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/favorites" component={FavoritesPage}/>
            <Route exact path="/serie/:id" component={SeriesPage}/>
            <Route exact path="/createAccount" component={CreateAccountPage}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
};
