import * as t from './actionTypes';

export const addNewPatient = formData => ({
  type: t.ADD_NEW_PATIENT_REQUEST,
  formData,
});
