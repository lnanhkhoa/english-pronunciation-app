import { createStore, applyMiddleware, compose } from 'redux'
// import Rehydration from '../Services/Rehydration'
// import ReduxPersist from '../config/ReduxPersist'
import DebugConfig from '../config/DebugConfig';
import createSagaMiddleware from 'redux-saga'
import Reactotron from '../config/ReactotronConfig'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []
  /* ------------- Navigation Middleware ------------ */
  /* ------------- Analytics Middleware ------------- */
  /* ------------- Saga Middleware ------------- */
  const sagaMonitor = DebugConfig.useReactotron
    ? console.tron.createSagaMonitor()
    : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = createStore
  if (DebugConfig.useReactotron) {
    enhancers.push(Reactotron.createEnhancer());
  }
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  // if (ReduxPersist.active) {
  //   Rehydration.updateReducers(store)
  // }
  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
