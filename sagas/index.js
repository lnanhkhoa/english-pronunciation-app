import { takeLatest, all } from 'redux-saga/effects';
import API from '../services/Api';
import FixtureAPI from '../services/FixtureApi';
import DebugConfig from '../config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from '../redux/StartupRedux';
/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';

const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

export default function* root() {
  yield all([takeLatest(StartupTypes.STARTUP, startup, api)]);
}
