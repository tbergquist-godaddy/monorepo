import React from 'react';
import PropTypes from 'prop-types';
import SerieTableRow from './SerieTableRow.jsx';
import Translate from '../utils/Translate';

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
            <th>{Translate('components.SerieTable.name')}</th>
            <th>{Translate('components.SerieTable.status')}</th>
            <th>{Translate('components.SerieTable.score')}</th>
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
