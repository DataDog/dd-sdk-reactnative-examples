import React, { useEffect, useRef } from "react";
import { AppRegistry, StyleSheet } from "react-native";
import { CompletionDetails } from "./src/CompletionDetails";
import { ConfirmationScreen } from "./src/ConfirmationScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DatadogProvider,
  InternalLog,
  SdkVerbosity,
} from "@datadog/mobile-react-native";
import { DdRumReactNavigationTracking } from "@datadog/mobile-react-navigation";

const Stack = createNativeStackNavigator();

const config = {
  trackResources: true,
  trackErrors: true,
  trackInteractions: true,
};
InternalLog.verbosity = SdkVerbosity.DEBUG;

const RNApp = (props) => {
  useEffect(() => {
    /**
     * In here we can put fake values. The only goal of this call
     * is to empty the buffer of RUM events.
     */
    DatadogProvider.initialize({
      clientToken: "fake_value",
      env: "fake_value",
      applicationId: "fake_value",
      longTaskThresholdMs: 100,
    });
  }, []);
  const navigationRef = useRef(null);

  return (
    <DatadogProvider configuration={config}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          DdRumReactNavigationTracking.startTrackingViews(
            navigationRef.current
          );
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="CompletionDetails"
            component={CompletionDetails}
            initialParams={{ reminder: props.reminder }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

// Module name
AppRegistry.registerComponent("RNApp", () => RNApp);
