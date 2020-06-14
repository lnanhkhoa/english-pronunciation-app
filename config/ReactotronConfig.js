import Immutable from 'seamless-immutable';
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import DebugConfig from './DebugConfig';
import { Updates } from 'expo';

if (DebugConfig.useReactotron) {
  Reactotron.configure({
    name: 'Rectotron App',
  })
    .useReactNative({ asyncStorage: false })
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // CustomCommand
  Reactotron.onCustomCommand('Reload app', () => {
    Reactotron.close();
    // NativeModules.DevMenu.reload();
    Updates.reloadFromCache();
  });

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
} else {
  const noop = params => {};
  console.tron = {
    configure: noop,
    connect: noop,
    use: noop,
    useReactNative: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
    warn: noop,
    image: noop,
    reportError: noop,
  };
}

export default Reactotron;