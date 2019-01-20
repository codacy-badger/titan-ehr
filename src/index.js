/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import App from './App';
import store from './store';
import './App/normalize.css';
import './App/index.css';
import './App/forms.css';

/** *******************************************************************
 * TypeScript Interfaces
 ******************************************************************* */

/** *******************************************************************
 * React Component
 ******************************************************************* */
const application = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

/** *******************************************************************
 * Redux and Exports
 ******************************************************************* */
// eslint-disable-next-line
ReactDOM.render(application, document.getElementById('root'));
