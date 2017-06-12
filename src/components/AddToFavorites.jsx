import React from 'react';
import PropTypes from 'prop-types';
import Transport from '../utils/Transport';
import Translate from '../utils/Translate';

export default class AddToFavorites extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { isFavorite, addToFavorite } = this.props;
    if (!Transport.isLoggedIn()) {
      return null;
    }

    if (!isFavorite) {
      return (
        <button
          className="btn btn-success"
          style={{ marginTop: '10px' }}
          onClick={addToFavorite}
        >
          {Translate('components.AddToFavorites.addToFavorites')}
        </button>
      );
    }
    return (
      <div className="alert alert-info" style={{ marginTop: '10px' }}>
        {Translate('components.AddToFavorites.isFavorite')}
      </div>
    );
  }
}

AddToFavorites.PropTypes = {
  isFavorite: PropTypes.bool.isRequired,
  addToFavorite: PropTypes.func.isRequired,
};

