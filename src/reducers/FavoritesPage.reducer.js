import * as actions from '../actions/FavoritesPage.actions';
import moment from 'moment';

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
    case 'nextEpisode':
      return favorites.sort((a, b) => {
        let aDate = getNextEpisode(a);
        let bDate = getNextEpisode(b);
        if (aDate < bDate) {
          return 1;
        }
        if (aDate > bDate) {
          return -1;
        }

        return 0;
      });
    case 'latestEpisode':
      return favorites.sort((a, b) => {
        let aDate = getLatestEpisode(a);
        let bDate = getLatestEpisode(b);
        if (aDate < bDate) {
          return 1;
        }
        if (aDate > bDate) {
          return -1;
        }

        return 0;
      });
    case '-latestEpisode':
    case '-nextEpisode':
    case '-name':
    case '-status':
      return favorites.reverse();
    default:
      return favorites;
  }
};

const getNextEpisode = serie => {
  let next = null;

  serie._embedded.episodes.forEach(episode => {
    if (!next && moment(episode.airdate) >= moment().set('hour', 0).set('minute', 0).set('second', 0)) {
      next = episode;
    }
    else if (next && moment(episode.airdate) >= moment().set('hour', 0).set('minute', 0).set('second', 0)
      && moment(episode.airdate) < moment(next.airdate)) {
      next = episode;
    }
  });

  return next ? moment(next.airdate) : null;
};

const getLatestEpisode = serie => {
  let episodeToReturn = null;

  serie._embedded.episodes.forEach(episode => {
    if (!episodeToReturn && moment(episode.airdate) < moment().set('hour', 0).set('minute', 0).set('second', 0)) {
      episodeToReturn = episode;
    }
    else if (episodeToReturn && moment(episode.airdate) < moment().set('hour', 0).set('minute', 0).set('second', 0)
      && moment(episode.airdate) > moment(episodeToReturn.airdate)) {
      episodeToReturn = episode;
    }
  });
  return episodeToReturn ? moment(episodeToReturn.airdate) : null;
};
