# React Native app with native screens

This app is a demo React Native app that features some iOS and Android native screens.
The application is instrumented with Datadog.

See the [App.tsx](./App.tsx) on how to instrument Datadog on the javascript side.
See the [CustomViewController.m](./ios/ReactNativeWithIOSScreen/CustomViewController.m) file for an example of iOS RUM View tracking.
See the [FirstFragment.kt](./android/app/src/main/java/com/reactnativewithiosscreen/FirstFragment.kt) file for examples of Android RUM View and Resource tracking.

## Installation

In this directory, install all dependencies:

```shell
yarn install
(cd ios && pod install)
```

Then create a `credentials.json` file at the root of the project with the following content:

```
{
  "applicationId": "<your-application-id>",
  "clientToken": "<your-client-token>",
  "environment": "<your-environment>"
}

```
