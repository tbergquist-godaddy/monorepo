import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import 'script!whatwg-fetch';



ReactDOM.render((
    <Routes />
), document.getElementById('app'));