/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React from 'react';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import './index.css';

/** *******************************************************************
 * TypeScript Interfaces
 ******************************************************************* */

/** *******************************************************************
 * React Component
 ******************************************************************* */
const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__logo">
      <span className="sidebar__title">Titan</span>
      <span className="sidebar__subtitle">EHR</span>
    </div>
    <div className="sidebar__section">Inventory</div>
    <div className="sidebar__section">Patients</div>
    <div className="sidebar__section">Scheduling</div>
    <div className="sidebar__section">Imaging</div>
    <div className="sidebar__section">Medication</div>
    <div className="sidebar__section">Labs</div>
    <div className="sidebar__section">Billing</div>
    <div className="sidebar__section">Incidents</div>
    <div className="sidebar__section">Administration</div>
  </div>
);

/** *******************************************************************
 * Redux and Exports
 ******************************************************************* */
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Sidebar);
export default Sidebar;
