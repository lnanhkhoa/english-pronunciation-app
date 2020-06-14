
if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = true;
}

export default {
  showDevScreens: false,
  useFixtures: false,
  ezLogin: false,
  yellowBox: __DEV__,
  reduxLogging: __DEV__,
  includeExamples: __DEV__,
  useReactotron: __DEV__
}
