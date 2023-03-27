# iOS app with React Native screens

This app is a demo iOS app that features some React Native screens.
The application is instrumented with Datadog.

See the [AppDelegate.swift](./ios/Today/AppDelegate.swift) file for the iOS instrumentation.
See the [index.js](./index.js) on how to instrument Datadog on the javascript side.

## Installation

In this directory, install all dependencies:

```shell
yarn install
(cd ios && pod install)
```

Then create a file at `ios/Secrets.xcconfig` with the following content:

```
APPLICATION_ID = <your-application-id>
CLIENT_TOKEN = <your-client-token>
ENVIRONMENT = <env>
```
