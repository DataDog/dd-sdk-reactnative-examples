import React, {useEffect, useRef} from 'react';
import {CompletionDetails} from './src/CompletionDetails';
import {ConfirmationScreen} from './src/ConfirmationScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DatadogProvider,
  DatadogProviderConfiguration,
  DdSdkReactNative,
  InternalLog,
  SdkVerbosity,
} from '@datadog/mobile-react-native';
import {DdRumReactNavigationTracking} from '@datadog/mobile-react-navigation';
import {applicationId, clientToken, environment} from './credentials.json';
import { ImagePrivacyLevel, SessionReplay, SessionReplayConfiguration, TextAndInputPrivacyLevel, TouchPrivacyLevel } from '@datadog/mobile-react-native-session-replay';

const Stack = createNativeStackNavigator();

const config = new DatadogProviderConfiguration(
  clientToken,
  environment,
  applicationId,
  true,
  true,
  true
);

// Optional: enable or disable native crash reports
config.nativeCrashReportEnabled = true;
// Optional: Select your Datadog website (one of "US", "EU" or "GOV")
config.site = "US";
// Optional: Sample RUM sessions (in this example, 80% of session are sent to Datadog. Default is 100%)
config.sessionSamplingRate = 100;

config.appHangThreshold = 3.0;
config.trackNonFatalAnrs = true;

const sessionReplayConfig: SessionReplayConfiguration = {
  replaySampleRate: 100,
  imagePrivacyLevel: ImagePrivacyLevel.MASK_NONE,
  touchPrivacyLevel: TouchPrivacyLevel.SHOW,
  textAndInputPrivacyLevel: TextAndInputPrivacyLevel.MASK_SENSITIVE_INPUTS,
  startRecordingImmediately: true
}

const onSDKInitialized = async () => {
  await SessionReplay.enable(sessionReplayConfig);

  await DdSdkReactNative.setAttributes({
    profile_mode: "wall",
    chat_enabled: true,
    campaign_origin: "example_ad_network",
  });
};

InternalLog.verbosity = SdkVerbosity.DEBUG;

const RNApp = () => {
  const navigationRef = useRef(null);

  return (
    <DatadogProvider configuration={config} onInitialization={onSDKInitialized}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          DdRumReactNavigationTracking.startTrackingViews(
            navigationRef.current,
          );
        }}>
        <Stack.Navigator>
          <Stack.Screen
            name="CompletionDetails"
            component={CompletionDetails}
          />
          <Stack.Screen
            name="ConfirmationScreen"
            component={ConfirmationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DatadogProvider>
  );
};

// Module name
export default RNApp;
