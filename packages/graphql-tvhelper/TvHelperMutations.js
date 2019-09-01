// @flow

import Login from './src/account/mutation/Login';
import CreateUser from './src/account/mutation/CreateUser';
import AddFavorite from './src/tvshow/mutations/AddFavorite';
import DeleteFavorite from './src/tvshow/mutations/DeleteFavorite';

export default {
  tvHelperLogin: Login,
  addFavorite: AddFavorite,
  createUser: CreateUser,
  deleteFavorite: DeleteFavorite,
};
