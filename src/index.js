import 'babel-polyfill'; //es5 - > es 6
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

console.log('indexJS', routes);

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
