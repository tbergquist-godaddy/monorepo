import React from 'react';
import {observer} from 'mobx-react';
import flex from '../flex.scss';


@observer
class FlexContainerColumn extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = {};
    if(this.props.justifyContent) {
      style.justifyContent = this.props.justifyContent;
    }
    return (
      <div
        style={style}
        className={flex.flexContainerColumn}
      >
        {this.props.children}
      </div>
    )
  }
}

export default FlexContainerColumn;