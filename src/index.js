import React from 'react';
import {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import App from './App/containers/App.js';
import store from './App/store';
import {Router,Route,browserHistory } from 'react-router-redux'


render(
  <Provider store={store}>
    <App />
  </Provider>,
window.document.getElementById('App')
);