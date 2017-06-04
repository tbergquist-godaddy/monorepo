import React from 'react';
import PropTypes from 'prop-types';
import EpisodeTableRow from './EpisodeTableRow.jsx';

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
            <th>Season/episode</th>
            <th>name</th>
            <th>Airdate</th>
            <th>Summary</th>
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

