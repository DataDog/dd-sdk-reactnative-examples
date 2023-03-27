import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import {Categories} from './pages/Categories';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Products} from './pages/Products';
import {ListPage} from './pages/ListPage';
import {ListButton} from './pages/components/ListButton';
import {DdRumReactNavigationTracking} from '@datadog/mobile-react-navigation';
import {config, onSDKInitialized} from './datadog';
import {DatadogProvider} from '@datadog/mobile-react-native';
import codePush from 'react-native-code-push';
import {Platform} from 'react-native';
import {CrashButton} from './pages/components/CrashButton';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  deploymentKey: '',
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};

const {
  CodePushDeploymentKeyAndroid,
  CodePushDeploymentKeyIOS,
} = require('./config/credentials.json');

if (Platform.OS === 'android') {
  codePushOptions.deploymentKey = CodePushDeploymentKeyAndroid;
} else {
  codePushOptions.deploymentKey = CodePushDeploymentKeyIOS;
}

const App: () => React.ReactElement = () => {
  const navigationRef = React.useRef(null);

  // Once SDK is initialized you need to setup view tracking to be able to see data in the RUM Dashboard.
  return (
    <DatadogProvider configuration={config} onInitialization={onSDKInitialized}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            DdRumReactNavigationTracking.startTrackingViews(
              navigationRef.current,
            );
          }}>
          <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{title: 'Overview', headerRight: () => <CrashButton />}}
            />
            <Stack.Screen
              name="Products"
              component={Products}
              options={{
                headerRight: () => <ListButton />,
              }}
            />
            <Stack.Screen name="ListPage" component={ListPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </DatadogProvider>
  );
};

export default codePush(codePushOptions)(App);
