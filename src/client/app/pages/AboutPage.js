import React from 'react';
import {observer} from 'mobx-react';


@observer
class AboutPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="well">
        Thanx to tvmaze.com for delivering an great api
      </div>
    )
  }
}

export default AboutPage;