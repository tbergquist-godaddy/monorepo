import * as actions from '../actions/FavoritesPage.actions';

const initialState = {
  favorites: [],
  loadError: false,
};

export default function favoritesPage(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_FAVORITES_SUCCESS:
      return Object.assign({}, state, {
        favorites: action.favorites,
        loadError: false,
      });
    case actions.LOAD_FAVORITES_ERROR:
      return Object.assign({}, state, { loadError: true });
    case actions.DELETE_FAVORITE_SUCCESS:
      const newFavorites = state.favorites.filter(serie => serie.id !== action.id);
      return Object.assign({}, state, { favorites: newFavorites});
    default:
      return state;
  }
}
