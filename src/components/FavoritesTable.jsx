import React from 'react';
import PropTypes from 'prop-types';
import FavoritesTableRow from './FavoritesTableRow.jsx';

export default class FavoritesTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { favorites } = this.props;

    if (favorites.length === 0) {
      return null;
    }

    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Next episode</th>
            <th>Latest episode</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {favorites.map(favorite => {
            return (
              <FavoritesTableRow key={favorite.id} favorite={favorite} />
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
};
