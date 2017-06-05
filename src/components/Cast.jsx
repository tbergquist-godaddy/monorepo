import React from 'react';
import PropTypes from 'prop-types';
import CastItem from './CastItem.jsx';

export default class Cast extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { cast } = this.props;

    return (
      <div>
        <h2>Cast</h2>
      <div className="well cast-container">

        {cast.map(person => {
          return (
            <CastItem key={person.character.id} person={person}/>
          );
        })}
      </div>
      </div>
    );
  }
}

Cast.PropTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};
