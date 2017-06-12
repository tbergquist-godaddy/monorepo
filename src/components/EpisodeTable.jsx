import React from 'react';
import PropTypes from 'prop-types';
import EpisodeTableRow from './EpisodeTableRow.jsx';
import Translate from '../utils/Translate';

export default class EpisodeTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { episodes } = this.props;

    return (
      <div className="table-responsive" style={{ marginTop: '10px' }}>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>{Translate('components.EpisodeTable.seasonEpisode')}</th>
            <th>{Translate('components.EpisodeTable.name')}</th>
            <th>{Translate('components.EpisodeTable.airdate')}</th>
            <th>{Translate('components.EpisodeTable.summary')}</th>
          </tr>
          </thead>
          <tbody>
          {episodes.map(episode => {
            return(
              <EpisodeTableRow key={episode.id} episode={episode} />
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

EpisodeTable.PropTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

