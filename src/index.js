/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';


render(
  <AppContainer> 
    <App/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Root /> here rather than require() a <NextRoot />.
    const NextRoot = require('./app').default;
    render(
      <AppContainer>
         <NextRoot/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}