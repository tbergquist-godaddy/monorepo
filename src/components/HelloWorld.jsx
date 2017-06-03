import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HelloWorld extends React.Component {

  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(withRouter(HelloWorld));