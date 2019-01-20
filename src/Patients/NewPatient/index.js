/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import React, {Component} from 'react';
import {connect} from 'react-redux';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import './index.css';
import {emailValidationRegex} from '../constants';

/** *******************************************************************
 * TypeScript Interfaces
 ******************************************************************* */

/** *******************************************************************
 * React Component
 ******************************************************************* */
class NewPatient extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      formError: '',
      confirmReset: 0,
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
        value: 'male',
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
        value: 'private',
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
        value: 'A+',
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
      email: {
        value: '',
        touched: false,
        error: false,
      },
    };

    this.state = this.initialState;
  }

  handleBlur = (fieldName, required) => {
    if (!this.state[fieldName]) return;

    let validated = this.handleFieldValidation(fieldName);
    if (required && !this.state[fieldName].value) validated = false;

    const newFieldValues = {
      ...this.state[fieldName],
      error: !validated,
    };

    this.setState({
      [fieldName]: newFieldValues,
    });
  };

  handleFocus = fieldName => {
    if (!this.state[fieldName]) return;

    const newFieldValues = {
      ...this.state[fieldName],
      touched: true,
      error: false,
    };

    this.setState({
      [fieldName]: newFieldValues,
      formError: '',
    });
  };

  handleChange = (fieldName, value) => {
    if (!this.state[fieldName]) return;

    const newFieldValues = {
      ...this.state[fieldName],
      value,
    };

    this.setState({
      [fieldName]: newFieldValues,
    });
  };

  handleFieldValidation = fieldName => {
    let validated = true;

    if (fieldName === 'email') {
      validated = emailValidationRegex.test(this.state[fieldName].value.toLowerCase());
    }

    return validated;
  };

  handleReset = e => {
    const {confirmReset} = this.state;

    if (!confirmReset) return this.setState({confirmReset: 1});
    this.setState(this.initialState);
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = {
      ...this.state,
    };

    for (let props in formData) {
      if (formData[props].error) {
        return this.setState({formError: 'Please fix any highlighted fields.'});
      }
    }

    if (this.state.formError) this.setState({formError: ''});
  };

  inputUIFeedback = fieldName => {
    if (!this.state[fieldName]) return;
    const {error, touched} = this.state[fieldName];

    if (error) return 'input error';
    if (touched) return 'input touched';
    return 'input';
  };

  render() {
    const {
      formError,
      confirmReset,
      firstName,
      middleName,
      lastName,
      sex,
      dateOfBirth,
      placeOfBirth,
      occupation,
      patientType,
      phone,
      address,
      patientStatus,
      externalPatientId,
      bloodType,
      clinicSite,
      referredBy,
      referredDate,
      religion,
      parentGuardian,
      email,
    } = this.state;

    return (
      <div className="content-grid-container">
        <div className="content-header">New Patient</div>
        <div className="content new-patient">
          <form
            className="new-patient__grid-container"
            onChange={e => this.handleChange(e.target.name, e.target.value)}
            onFocus={e => this.handleFocus(e.target.name)}
            onBlur={e => this.handleBlur(e.target.name, e.target.required)}
            onReset={e => this.handleReset(e)}
            onSubmit={e => this.handleSubmit(e)}
          >
            <div className="flex-column">
              <span className="label">First Name</span>
              <input
                className={this.inputUIFeedback('firstName')}
                type="text"
                name="firstName"
                required
                value={firstName.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Middle Name</span>
              <input
                className={this.inputUIFeedback('middleName')}
                type="text"
                name="middleName"
                required={false}
                value={middleName.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Last Name</span>
              <input
                className={this.inputUIFeedback('lastName')}
                type="text"
                name="lastName"
                required
                value={lastName.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Sex</span>
              <select className={this.inputUIFeedback('sex')} name="sex" required value={sex.value}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="intersex">Intersex</option>
              </select>
            </div>
            <div className="flex-column">
              <span className="label">Date of Birth</span>
              <input
                className={this.inputUIFeedback('dateOfBirth')}
                type="date"
                name="dateOfBirth"
                required
                value={dateOfBirth.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Place of Birth</span>
              <input
                className={this.inputUIFeedback('placeOfBirth')}
                type="text"
                name="placeOfBirth"
                required
                value={placeOfBirth.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Occupation</span>
              <input
                className={this.inputUIFeedback('occupation')}
                type="text"
                name="occupation"
                required
                value={occupation.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Patient Type</span>
              <select
                className={this.inputUIFeedback('patientType')}
                name="patientType"
                required
                value={patientType.value}
              >
                <option value="private">Private</option>
                <option value="charity">Charity</option>
              </select>
            </div>
            <div className="flex-column">
              <span className="label">Phone</span>
              <input
                className={this.inputUIFeedback('phone')}
                type="tel"
                name="phone"
                required
                value={phone.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Patient Status</span>
              <input
                className={this.inputUIFeedback('patientStatus')}
                type="text"
                name="patientStatus"
                required
                value={patientStatus.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">External Patient ID</span>
              <input
                className={this.inputUIFeedback('externalPatientId')}
                type="text"
                name="externalPatientId"
                required={false}
                value={externalPatientId.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Blood Type</span>
              <select
                className={this.inputUIFeedback('bloodType')}
                name="bloodType"
                required
                value={bloodType.value}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="flex-column">
              <span className="label">Clinic Site</span>
              <input
                className={this.inputUIFeedback('clinicSite')}
                type="text"
                name="clinicSite"
                required={false}
                value={clinicSite.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Referred By</span>
              <input
                className={this.inputUIFeedback('referredBy')}
                type="text"
                name="referredBy"
                required={false}
                value={referredBy.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Referred Date</span>
              <input
                className={this.inputUIFeedback('referredDate')}
                type="date"
                name="referredDate"
                required={false}
                value={referredDate.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Religion</span>
              <input
                className={this.inputUIFeedback('religion')}
                type="text"
                name="religion"
                required
                value={religion.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Parent/Guardian</span>
              <input
                className={this.inputUIFeedback('parentGuardian')}
                type="text"
                name="parentGuardian"
                required
                value={parentGuardian.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Email</span>
              <input
                className={this.inputUIFeedback('email')}
                type="email"
                name="email"
                required
                value={email.value}
              />
            </div>
            <div className="flex-column">
              <span className="label">Address</span>
              <textarea
                className={this.inputUIFeedback('address')}
                type="text"
                name="address"
                required
                value={address.value}
              />
            </div>
            <div className="flex-column">
              {/* Temporary */}
              {formError ? alert('Please correct the highlighted fields.') : null}
              <div className="flex-row">
                <button
                  type="reset"
                  className={confirmReset ? 'button_reset-confirm' : 'button_reset'}
                >
                  {confirmReset ? 'Confirm Reset' : 'Reset Form'}
                </button>
                <button type="submit" className="button_submit">
                  Add Patient
                </button>
              </div>
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
