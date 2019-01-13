/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import './index.css';
import {sidebarTabs} from '../constants';
import {getExpandedTab} from '../selectors';
import {expandSidebarTab} from '../actions';

/** *******************************************************************
 * TypeScript Interfaces
 ******************************************************************* */

/** *******************************************************************
 * React Component
 ******************************************************************* */
const Sidebar = ({expandedTab, expandTab}) => {
  const sidebarMenu = sidebarTabs.map(tab => (
    <div
      className={
        expandedTab === tab.title ? 'sidebar__section sidebar__section-active' : 'sidebar__section'
      }
      onClick={() => expandTab(tab.title)}
    >
      {tab.title}
    </div>
  ));

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <span className="sidebar__title">Titan</span>
        <span className="sidebar__subtitle">EHR</span>
      </div>
      {sidebarMenu}
    </div>
  );
};

/** *******************************************************************
 * Redux and Exports
 ******************************************************************* */
Sidebar.propTypes = {
  expandedTab: PropTypes.string,
  expandTab: PropTypes.func,
};

const mapStateToProps = state => ({
  expandedTab: getExpandedTab(state),
});

const mapDispatchToProps = dispatch => ({
  expandTab: tab => dispatch(expandSidebarTab(tab)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
