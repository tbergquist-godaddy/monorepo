import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {browserHistory } from 'react-router';
import UserStore from '../stores/UserStore';

@observer
class App extends React.Component {

  @observable userStore = new UserStore();

  componentWillMount() {
    if(!this.userStore.isAuthenticated) {
      browserHistory.push('/');
    }
  }

  render() {
    return(
      <div className="test">
        app shell
        {this.props.children}
      </div>
    )
  }
}

export default App;