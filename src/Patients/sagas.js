/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import axios from 'axios';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import * as t from './actionTypes';
import {API_BASE_URL} from '../utilities';

/** *******************************************************************
 * Sagas
 ******************************************************************* */
function* addNewPatient(action) {
  try {
    // const newPatientCall = yield call(() => axios
    //   .post(`${API_BASE_URL}/new/patient`, action.formData)
    //   .then(response => response)
    //   .catch(err => err));
    // HANDLE RESULT OF CALL AND ANY ERRORS
  } catch (err) {
    yield put({type: t.ADD_NEW_PATIENT_ERROR, error: err});
  }
}

export function* watchNewPatientRequest() {
  yield takeLatest(t.ADD_NEW_PATIENT_REQUEST, addNewPatient);
}

export default function* rootSaga() {
  yield all([watchNewPatientRequest()]);
}
