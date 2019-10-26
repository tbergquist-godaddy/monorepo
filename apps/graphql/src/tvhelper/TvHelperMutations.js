// @flow

import Login from './account/mutation/Login';
import CreateUser from './account/mutation/CreateUser';
import AddFavorite from './tvshow/mutations/AddFavorite';
import DeleteFavorite from './tvshow/mutations/DeleteFavorite';
import MarkAsWatched from './episode/mutations/MarkAsWatchted';
import DeleteWatchedEpisode from './episode/mutations/DeleteWatchedEpisode';

export default {
  tvHelperLogin: Login,
  addFavorite: AddFavorite,
  createUser: CreateUser,
  deleteFavorite: DeleteFavorite,
  markAsWatched: MarkAsWatched,
  deleteWatchedEpisode: DeleteWatchedEpisode,
};
