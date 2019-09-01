// @flow

import Favorite from './src/dataObjects/Favorite';

// Repositories
export { default as UserRepository } from './src/repositories/User';
export { default as FavoritesRepository } from './src/repositories/Favorites';
export { default as WatchedEpisodeRepository } from './src/repositories/WatchedEpisode';

// Models
export { default as UserModel } from './src/models/UserModel';
export { default as FavoritesModel } from './src/models/Favorites';

// types
export type FavoriteType = Favorite;

// Connection
export { default as tvHelperConnection } from './src/connection';
