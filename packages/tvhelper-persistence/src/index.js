// @flow

import Favorite from './dataObjects/Favorite';

// Repositories
export { default as UserRepository } from './repositories/User';
export { default as FavoritesRepository } from './repositories/Favorites';
export { default as WatchedEpisodeRepository } from './repositories/WatchedEpisode';

// Models
export { default as UserModel } from './models/UserModel';
export { default as FavoritesModel } from './models/Favorites';

// types
export type FavoriteType = Favorite;

// Connection
export { default as tvHelperConnection } from './connection';
