/** *******************************************************************
 * Absolute Imports
 ******************************************************************* */
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

/** *******************************************************************
 * Relative Imports
 ******************************************************************* */
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

/** *******************************************************************
 * Redux and Exports
 ******************************************************************* */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
