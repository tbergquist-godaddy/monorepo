import React from 'react';
import PropTypes from 'prop-types';
import FavoritesTableRow from './FavoritesTableRow.jsx';
import Translate from '../utils/Translate';

export default class FavoritesTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { favorites, deleteFavorite, sortBy } = this.props;

    if (favorites.length === 0) {
      return null;
    }

    return (
      <div className="table-responsive favorites-table">
        <table className="table table-bordered">
          <thead>
          <tr>
            <th className="sort-header"
              onClick={() => sortBy('name')}>{Translate('components.FavoritesTable.name')}</th>
            <th className="sort-header" onClick={() => sortBy('status')}>{Translate('components.FavoritesTable.status')}</th>
            <th className="sort-header" onClick={() => sortBy('latestEpisode')}>{Translate('components.FavoritesTable.latestEpisode')}</th>
            <th className="sort-header" onClick={() => sortBy('nextEpisode')}>{Translate('components.FavoritesTable.nextEpisode')}</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {favorites.map(favorite => {
            return (
              <FavoritesTableRow
                key={favorite.id}
                favorite={favorite}
                deleteFavorite={deleteFavorite}
              />
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

FavoritesTable.PropTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  sortBy: PropTypes.func.isRequired,
};
