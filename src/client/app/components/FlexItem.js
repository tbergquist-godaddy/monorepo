import React from 'react';
import {observer} from 'mobx-react';


@observer
class FlexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={{flexBasis : `${this.props.flex}%`}}
      >
        {this.props.children}
      </div>
    )
  }
}

export default FlexItem;