import React from 'react';
import PropTypes from 'prop-types';

export default class CastItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { person } = this.props;

    return (
      <div className="cast-item">
        <img src={person.character.image.medium || ''} alt={person.character.name} />
        <div>Character: {person.character.name}</div>
        <div>Actor: {person.person.name}</div>
      </div>
    );
  }
}

CastItem.PropTypes = {
  person: PropTypes.shape({
    character: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.shape({
        medium: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

