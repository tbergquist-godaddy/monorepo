import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SerieTableRow extends React.Component {

  render() {
    const { serie } = this.props;
    return (
      <tr>
        <td>
          <Link to={`/serie/${serie.show.id}`}>{serie.show.name}</Link>
          </td>
        <td>{serie.show.status}</td>
        <td>{serie.show.rating.average || 'N/A'}</td>
      </tr>
    );
  }
}

SerieTableRow.PropTypes = {
  serie: PropTypes.shape({
    show: PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      id: PropTypes.number.isRequired,
      rating: PropTypes.shape({
        average: PropTypes.number
      })
    })
  })
};
