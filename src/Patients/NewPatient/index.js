/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React, {Component} from 'react';
import {connect} from 'react-redux';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import './index.css';
import {sex, bloodType, patientType} from '../constants';

/** *******************************************************************
 * TypeScript Interfaces
 ******************************************************************* */

/** *******************************************************************
 * React Component
 ******************************************************************* */
class NewPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      sex: '',
      dateOfBirth: '',
      placeOfBirth: '',
      occupation: '',
      patientType: '',
      phone: '',
      address: '',
      patientStatus: '',
      externalPatientId: '',
      bloodType: '',
      clinicSite: '',
      referredBy: '',
      referredDate: '',
      religion: '',
      parentGuardian: '',
      paymentProfile: '',
      email: '',
      country: '',
    };
  }

  render() {
    return (
      <div className="content-grid-container">
        <div className="content-header">New Patient</div>
        <div className="content homepage">Hello</div>
      </div>
    );
  }
}

/** *******************************************************************
 * Redux and Exports
 ******************************************************************* */
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPatient);
