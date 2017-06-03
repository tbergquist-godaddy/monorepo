import React from 'react';
import PropTypes from 'prop-types';

export default class SerieTableRow extends React.Component {

  render() {
    const { serie } = this.props;
    return (
      <tr>
        <td>{serie.show.name}</td>
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
      rating: PropTypes.shape({
        average: PropTypes.number
      })
    })
  })
};
