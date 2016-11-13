import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import 'script!whatwg-fetch';
//import 'script!./components/spinner/spin';



ReactDOM.render((
    <Routes />
), document.getElementById('app'));