/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import './index.css';
import {sidebarTabs, subMenus} from '../constants';
import {getExpandedTab} from '../selectors';
import {expandSidebarTab} from '../actions';

/** *******************************************************************
 * TypeScript Interfaces
 ******************************************************************* */

/** *******************************************************************
 * React Component
 ******************************************************************* */

class Sidebar extends Component {
  handleExpandTab = title => {
    const {expandedTab, expandTab} = this.props;

    if (expandedTab === title) return expandTab('');
    return expandTab(title);
  };

  handleSubMenuLinkClick = subMenuItem => {
    const {history} = this.props;

    return history.push(subMenuItem.path);
  };

  renderSubMenuLinks = title => {
    return subMenus[title].map(subMenuItem => {
      const {expandedTab} = this.props;
      const expanded = expandedTab === subMenuItem.title;

      return (
        <div
          onClick={() => this.handleSubMenuLinkClick(subMenuItem)}
          className={expanded ? 'sidebar__subSection sidebar__active' : 'sidebar__subSection'}
        >
          {subMenuItem.title}
        </div>
      );
    });
  };

  render() {
    const {expandedTab} = this.props;

    const sidebarMenu = sidebarTabs.map(tab => {
      const {title} = tab;
      const expanded = expandedTab === title;

      return (
        <Fragment>
          <div
            className={expanded ? 'sidebar__section sidebar__active' : 'sidebar__section'}
            onClick={() => this.handleExpandTab(title)}
          >
            {title}
          </div>
          {expanded ? this.renderSubMenuLinks(title) : null}
        </Fragment>
      );
    });

    return (
      <div className="sidebar">
        <div className="sidebar__logo" onClick={() => this.props.history.push('/')}>
          <span className="sidebar__title">Titan</span>
          <span className="sidebar__subtitle">EHR</span>
        </div>
        {sidebarMenu}
      </div>
    );
  }
}

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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Sidebar),
);
