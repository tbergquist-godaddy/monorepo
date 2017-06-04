import React from 'react';
import PropTypes from 'prop-types';
import Transport from '../utils/Transport';

export default class AddToFavorites extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { isFavorite } = this.props;
    if (!Transport.isLoggedIn()) {
      return null;
    }

    if (!isFavorite) {
      return (
        <button className="btn btn-success" style={{marginTop: '10px'}}>Add to favorites</button>
      );
    }
    return (
      <div className="alert alert-info" style={{marginTop: '10px'}}>
        The show is already in favorites
      </div>
    );
  }
}

AddToFavorites.PropTypes = {
  isFavorite: PropTypes.bool.isRequired,
};

