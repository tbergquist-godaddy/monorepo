// @flow

import Login from './src/account/mutation/Login';
import CreateUser from './src/account/mutation/CreateUser';
import AddFavorite from './src/tvshow/mutations/AddFavorite';

export default {
  tvHelperLogin: Login,
  addFavorite: AddFavorite,
  createUser: CreateUser,
};
