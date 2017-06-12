import React from 'react';
import PropTypes from 'prop-types';
import Translate from '../utils/Translate';

export default class CastItem extends React.Component {

  constructor(props) {
    super(props);
  }

  getImageUrl() {
    const { person } = this.props;
    let url = '';

    if (person.character.image && person.character.image.medium) {
      url = person.character.image.medium;
    }
    else if(person.person.image && person.person.image.medium) {
      url = person.person.image.medium;
    }
    return url;
  }

  render() {
    const { person } = this.props;
    let imgUrl = this.getImageUrl();

    return (
      <div className="cast-item">
        <img src={imgUrl} alt={person.character.name} />
        <div>{Translate('components.CastItem.character')}: {person.character.name}</div>
        <div>{Translate('components.CastItem.actor')}: {person.person.name}</div>
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

