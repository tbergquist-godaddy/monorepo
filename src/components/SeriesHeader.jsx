import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'react-bootstrap';
import Translate from '../utils/Translate';

export default class SeriesHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { serie } = this.props;
    return (
      <div>
        <Media>
          <Media.Left>
            <img src={serie.image.medium} alt={Translate('general.altText')}/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              {serie.name}
            </Media.Heading>
            <p dangerouslySetInnerHTML={{ __html: serie.summary }} />
          </Media.Body>
        </Media>
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
