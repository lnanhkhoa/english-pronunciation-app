import { createReducer, createActions } from 'reduxsauce';

import Immutable from 'seamless-immutable';
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
});

export const INITIAL_STATE = Immutable({
  startup: null,
});

export const StartupTypes = Types;
export default Creators;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: (state) => state,
});
