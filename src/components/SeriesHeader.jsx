import React from 'react';
import PropTypes from 'prop-types';

export default class SeriesHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { serie } = this.props;
    return (
      <div>
        <h2>{serie.name}</h2>
        <div className="series-header">
          <img src={serie.image.medium} alt="Image missing"/>
          <div style={{ paddingLeft: '10px' }}
            dangerouslySetInnerHTML={{ __html: serie.summary }}/>

        </div>
      </div>
    );
  }
}

SeriesHeader.PropTypes = {
  serie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
