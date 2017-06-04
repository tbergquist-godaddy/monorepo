import * as actions from '../actions/FavoritesPage.actions';

const initialState = {
  favorites: [],
  loadError: false,
  sortProperty: '',
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
      return Object.assign({}, state, { favorites: newFavorites });
    case actions.SORT_FAVORITES:
      return Object.assign({}, state, {
        favorites: sortFavorites(action.property, state.favorites),
        sortProperty: action.property,
      });
    default:
      return state;
  }
}

const sortFavorites = (property, favorites) => {
  switch (property) {
    case 'name':
    case 'status':
      return favorites.sort((a, b) => {
        if (a[property].toLowerCase() < b[property].toLowerCase()) {
          return -1;
        }
        if (a[property].toLowerCase() > b[property].toLowerCase()) {
          return 1;
        }

        return 0;
      });
    case '-name':
    case '-status':
      return favorites.reverse();
    default:
      return favorites;
  }
};
