/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import Homepage from '../Homepage';

/** *******************************************************************
 * Redux and Exports
 ******************************************************************* */
export default (
  <Switch>
    <Route component={Homepage} exact path="/" />
    {/* <Route path="/404" component={NotFound} />
    <Redirect from="*" to="/404" /> */}
  </Switch>
);
