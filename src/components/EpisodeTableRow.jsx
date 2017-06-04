import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class EpisodeTableRow extends React.Component {

  constructor(props) {
    super(props);
  }

  get episode() {
    const { episode } = this.props;
    return episode.number < 10 ? `0${episode.number}` : episode.number;
  }

  get season() {
    const { episode } = this.props;
    return episode.season < 10 ? `0${episode.season}` : episode.season;
  }

  render() {
    const { episode } = this.props;

    return (
      <tr>
        <td>{`s${this.season}e${this.episode}`}</td>
        <td>{episode.name}</td>
        <td>{moment(episode.airdate).format('L')}</td>
        <td dangerouslySetInnerHTML={{__html: episode.summary}} />
      </tr>
    );
  }
}

EpisodeTableRow.PropTypes = {
  episode: PropTypes.shape({
    name: PropTypes.string.isRequired,
    season: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    airdate: PropTypes.string.isRequired,
  }).isRequired
};
