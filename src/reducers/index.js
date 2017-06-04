import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import SearchForm from './SearchForm.reducer';
import SearchPage from './SearchPage.reducer';
import LoginForm from './LoginForm.reducer';
import FavoritesPage from './FavoritesPage.reducer';
import Spinner from './Spinner.reducer';
import SeriePage from './SeriePage.reducer';


const reducers = combineReducers({
  SearchForm,
  SearchPage,
  LoginForm,
  FavoritesPage,
  Spinner,
  SeriePage,
});

export default reducers;