import * as actions from '../actions/SeriesPage.actions';

const initialState = {
  serie: {
    image: {
      medium: '',
    },
    _embedded: {
      episodes: [],
      cast: [],
    }
  },
  isFavorite: false,
};

export default function seriePage(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_SERIE_SUCCESS:
      return Object.assign({}, state, {
        serie: action.serie,
      });
    case actions.IS_FAVORITE_SUCCESS:
      return Object.assign({}, state, {
        isFavorite: action.isFavorite,
      });
    case actions.ADD_TO_FAVORITE_SUCCESS:
      return Object.assign({}, state, {
        isFavorite: true,
      });
    default:
      return state;
  }
};
