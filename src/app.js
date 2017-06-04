import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import Routes from './components/Routes.jsx';
import moment from 'moment';
moment.locale('nb');


ReactDOM.render((
  <Routes/>
), document.getElementById('app'));