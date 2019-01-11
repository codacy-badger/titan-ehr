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
const Homepage = () => (
  <div className="content-grid-container">
    <div className="content-header">Homepage</div>
    <div className="content homepage">
      <div className="homepage__header">Welcome to TitanEHR!</div>
      <div>
        <p>Placeholder</p>
        <p>Placeholder</p>
      </div>
    </div>
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
// )(Homepage);
export default Homepage;
