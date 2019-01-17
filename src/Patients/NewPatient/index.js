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
      firstName: {
        value: '',
        touched: false,
        error: false,
      },
      middleName: {
        value: '',
        touched: false,
        error: false,
      },
      lastName: {
        value: '',
        touched: false,
        error: false,
      },
      sex: {
        value: '',
        touched: false,
        error: false,
      },
      dateOfBirth: {
        value: '',
        touched: false,
        error: false,
      },
      placeOfBirth: {
        value: '',
        touched: false,
        error: false,
      },
      occupation: {
        value: '',
        touched: false,
        error: false,
      },
      patientType: {
        value: '',
        touched: false,
        error: false,
      },
      phone: {
        value: '',
        touched: false,
        error: false,
      },
      address: {
        value: '',
        touched: false,
        error: false,
      },
      patientStatus: {
        value: '',
        touched: false,
        error: false,
      },
      externalPatientId: {
        value: '',
        touched: false,
        error: false,
      },
      bloodType: {
        value: '',
        touched: false,
        error: false,
      },
      clinicSite: {
        value: '',
        touched: false,
        error: false,
      },
      referredBy: {
        value: '',
        touched: false,
        error: false,
      },
      referredDate: {
        value: '',
        touched: false,
        error: false,
      },
      religion: {
        value: '',
        touched: false,
        error: false,
      },
      parentGuardian: {
        value: '',
        touched: false,
        error: false,
      },
      paymentProfile: {
        value: '',
        touched: false,
        error: false,
      },
      email: {
        value: '',
        touched: false,
        error: false,
      },
      country: {
        value: '',
        touched: false,
        error: false,
      },
    };
  }

  handleBlur = field => {
    // fieldValidatorHelperFunction call

    const newFieldValues = {
      ...field,
      error: !this.state[field].value,
    };

    this.setState({
      [field]: newFieldValues,
    });
  };

  handleFocus = field => {
    const newFieldValues = {
      ...field,
      touched: true,
      error: false,
    };

    this.setState({
      [field]: newFieldValues,
    });
  };

  handleChange = (field, value) => {
    const newFieldValues = {
      ...field,
      value,
    };

    this.setState({
      [field]: newFieldValues,
    });
  };

  inputUIFeedback = field => {
    const {error, touched} = this.state[field];

    if (error) return 'input error';
    if (touched) return 'input touched';
    return 'input';
  };

  render() {
    const {firstName} = this.state;

    return (
      <div className="content-grid-container">
        <div className="content-header">New Patient</div>
        <div className="content new-patient">
          <form>
            <div className="flex-row">
              <span className="label">First Name</span>
              <input
                className={this.inputUIFeedback('firstName')}
                type="text"
                value={firstName.value}
                onChange={e => this.handleChange('firstName', e.target.value)}
                onFocus={() => this.handleFocus('firstName')}
                onBlur={() => this.handleBlur('firstName')}
              />
            </div>
          </form>
        </div>
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
