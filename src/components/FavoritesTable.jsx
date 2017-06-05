import React from 'react';
import PropTypes from 'prop-types';
import FavoritesTableRow from './FavoritesTableRow.jsx';

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
            <th className="sort-header" onClick={() => sortBy('name')}>Name</th>
            <th className="sort-header" onClick={() => sortBy('status')}>Status</th>
            <th className="sort-header" onClick={() => sortBy('latestEpisode')}>Latest episode</th>
            <th className="sort-header" onClick={() => sortBy('nextEpisode')}>Next episode</th>
            <th>Action</th>
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
