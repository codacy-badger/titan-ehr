/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import App from './App';
import './App/normalize.css';
import './App/index.css';

/** *******************************************************************
 * TypeScript Interfaces
 ******************************************************************* */

/** *******************************************************************
 * React Component
 ******************************************************************* */
const application = (
  <Router>
    <App />
  </Router>
);

/** *******************************************************************
 * Redux and Exports
 ******************************************************************* */
// eslint-disable-next-line
ReactDOM.render(application, document.getElementById('root'));
