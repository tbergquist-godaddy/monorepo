import React from 'react';
import PropTypes from 'prop-types';
import SerieTableRow from './SerieTableRow.jsx';

export default class SerieTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { series } = this.props;
    if (!series.length) {
      return null;
    }

    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Score</th>
          </tr>
          </thead>
          <tbody>
          {series.map(serie => <SerieTableRow key={serie.show.id} serie={serie}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

SerieTable.PropTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      show: PropTypes.shape({
        id: PropTypes.number,
      })
    })
  )
};
