import React from 'react';
import styles from '../app.scss';
import {Link} from 'react-router'

class LoginPage extends React.Component {

  render() {
    return (
      <div className={styles.test}>
        login pages
        <Link to={`/home`}>home</Link>
      </div>
    )
  }
}

export default LoginPage;