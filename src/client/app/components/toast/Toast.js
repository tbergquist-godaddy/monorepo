import React from 'react';
import {observer} from 'mobx-react';
import style from './toast.scss';
import {
  action,
  observable
} from 'mobx';

@observer
class Toast extends React.Component {

  @observable visible = false;

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.toggleVisability();
      setTimeout(() => {
        this.toggleVisability();
        this.props.callback();
      }, 3000);
    }
  }

  @action
  toggleVisability() {
    this.visible = !this.visible;
  }

  render() {
    let visability = this.visible ? 'visible' : 'hidden';
    return (
      <div
        className={style.toast}
        style={{visibility : visability}}
      >
        {this.props.text}
      </div>
    )
  }
}

export default Toast;