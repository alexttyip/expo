import { registerRootComponent, Logs } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

// https://github.com/expo/expo/issues/2623#issuecomment-441875640
if (__DEV__) {
  // https://github.com/expo/expo/issues/2623#issuecomment-441364587
  const isRemoteDebuggingEnabled = typeof atob !== 'undefined';
  if (isRemoteDebuggingEnabled) {
    Logs.disableExpoCliLogging();
  } else {
    Logs.enableExpoCliLogging();
  }
}

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(require('{{relativeProjectPath}}/App').default);
