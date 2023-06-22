# React Native tvOS and AndroidTV apps

This app is a demo React Native app that runs on tvOS and AndroidTV.
The application is instrumented with Datadog.

See the [App.tsx](./App.tsx) on how to instrument Datadog on the javascript side.

## Installation

In this directory, install all dependencies:

```shell
yarn install
(cd ios && pod install)
```

Then create a `credentials.json` file at the root of the project with the following content:

```json
{
  "applicationId": "<your-application-id>",
  "clientToken": "<your-client-token>",
  "environment": "<your-environment>"
}
```

You can find these credentials in Datadog.

## Running the app on tvOS

To run the app on a tvOS simulator, run:

```shell
yarn tvos
```

## Running the app on AndroidTV

To run the app on an AndroidTV emulator, first create [an emulator in Android studio](https://developer.android.com/training/tv/start/start#run-on-a-virtual-device).

Open the `android` folder with Android Studio, then select the AndroidTV emulator and run the app.
