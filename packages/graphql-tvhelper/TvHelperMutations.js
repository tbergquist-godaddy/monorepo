// @flow

import Login from './src/account/mutation/Login';
import CreateUser from './src/account/mutation/CreateUser';
import AddFavorite from './src/tvshow/mutations/AddFavorite';
import DeleteFavorite from './src/tvshow/mutations/DeleteFavorite';
import MarkAsWatched from './src/episode/mutations/MarkAsWatchted';

export default {
  tvHelperLogin: Login,
  addFavorite: AddFavorite,
  createUser: CreateUser,
  deleteFavorite: DeleteFavorite,
  markAsWatched: MarkAsWatched,
};
