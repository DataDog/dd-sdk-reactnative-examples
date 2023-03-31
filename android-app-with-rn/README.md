# Android app with React Native screens

This app is a demo Android app with React Native screens.

See the [MyReactApplication.kt](./android/app/src/main/java/com/example/hybridapp/MyReactApplication.kt) file for the Android instrumentation.
See the [index.android.js](./index.android.js) on how to instrument Datadog on the javascript side.

## Installation

In this directory, install all dependencies:

```shell
yarn install
```

Then create a file at `android/datadog.properties` with the following content:

```
APPLICATION_ID="<your-application-id>"
CLIENT_TOKEN="<your-client-token>"
ENVIRONMENT="<env>"
```

You can find these credentials in Datadog.

## Fixing build issues

There is an existing issue with [existing android apps integrating react-native-screens](https://github.com/software-mansion/react-native-screens/issues/1515).
To solve it, open `node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenStackHeaderConfig.kt` and change line 393:

```kotlin
        if (context.theme.resolveAttribute(android.R.attr.colorPrimary, tv, true)) {
```
