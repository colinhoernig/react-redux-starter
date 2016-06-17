import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';

const store = configureStore();

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
