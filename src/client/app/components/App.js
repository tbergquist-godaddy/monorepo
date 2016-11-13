import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {browserHistory } from 'react-router';
import UserStore from '../stores/UserStore';
import styles from '../app.scss';
import {Header} from './';

@observer
class App extends React.Component {


  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.appContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;