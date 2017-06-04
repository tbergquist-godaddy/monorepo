import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './spin';

const opts = {
  lines: 13 // The number of lines to draw
  , length: 28 // The length of each line
  , width: 14 // The line thickness
  , radius: 42 // The radius of the inner circle
  , scale: 1 // Scales overall size of the spinner
  , corners: 1 // Corner roundness (0..1)
  , color: '#000' // #rgb or #rrggbb or array of colors
  , opacity: 0.25 // Opacity of the lines
  , rotate: 0 // The rotation offset
  , direction: 1 // 1: clockwise, -1: counterclockwise
  , speed: 1 // Rounds per second
  , trail: 60 // Afterglow percentage
  , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
  , zIndex: 2e9 // The z-index (defaults to 2000000000)
  , className: 'spinner' // The CSS class to assign to the spinner
  , top: '50%' // Top position relative to parent
  , left: '50%' // Left position relative to parent
  , shadow: false // Whether to render a shadow
  , hwaccel: false // Whether to use hardware acceleration
  , position: 'fixed' // Element positioning
};


class MySpinner extends React.Component {

  constructor(props) {
    super(props);

    this.spinner = null;
  }

  componentDidMount() {
    if (this.props.spin) {
      var target = document.getElementById('spinner');
      this.spinner = new Spinner(opts).spin(target);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.spin) {
      var target = document.getElementById('spinner');
      this.spinner = new Spinner(opts).spin(target);
    }
    else if (this.props.spin && !nextProps.spin) {
      this.stopSpinner();
    }
  }

  stopSpinner() {
    this.spinner.stop();
  }

  render() {
    let display = this.props.spin ? '' : 'none';
    return (
      <div id="spinner" style={{ display: display }}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  spin: state.Spinner.spin,
});

export default connect(mapStateToProps)(MySpinner);
