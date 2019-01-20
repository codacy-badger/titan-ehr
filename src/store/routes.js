/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React from 'react';
import {Switch, Route} from 'react-router-dom';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import Homepage from '../Homepage';
import NewPatient from '../Patients/NewPatient';

/** *******************************************************************
 * Redux and Exports
 ******************************************************************* */
export default (
  <Switch>
    <Route component={Homepage} exact path="/" />
    <Route component={NewPatient} path="/patients/new" />
    {/* <Route path="/404" component={NotFound} />
    <Redirect from="*" to="/404" /> */}
  </Switch>
);
