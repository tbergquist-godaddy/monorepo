import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import SearchForm from './SearchForm.reducer';
import SearchPage from './SearchPage.reducer';
import LoginForm from './LoginForm.reducer';


const reducers = combineReducers({
  SearchForm,
  SearchPage,
  LoginForm,
});

export default reducers;