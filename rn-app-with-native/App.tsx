import React, {useEffect, useRef} from 'react';
import {CompletionDetails} from './src/CompletionDetails';
import {ConfirmationScreen} from './src/ConfirmationScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DatadogProvider,
  InternalLog,
  SdkVerbosity,
} from '@datadog/mobile-react-native';
import {DdRumReactNavigationTracking} from '@datadog/mobile-react-navigation';
import {applicationId, clientToken, environment} from './credentials.json';

const Stack = createNativeStackNavigator();

const config = {
  trackResources: true,
  trackErrors: true,
  trackInteractions: true,
};
InternalLog.verbosity = SdkVerbosity.DEBUG;

const RNApp = () => {
  useEffect(() => {
    DatadogProvider.initialize({
      clientToken,
      env: environment,
      applicationId,
      longTaskThresholdMs: 100,
      nativeInteractionTracking: true,
    });
  }, []);
  const navigationRef = useRef(null);

  return (
    <DatadogProvider configuration={config}>
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
