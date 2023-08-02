# Expo App

## Usage

In this directory, install all dependencies:

```shell
yarn install
(cd ios && pod install)
```

To try this project you need to create a `config` folder with the following files:

- `config/credentials.json` containting

  ```json
  {
    "clientToken": "<CLIENT_TOKEN>",
    "environment": "<ENVIRONMENT_NAME>",
    "applicationId": "<RUM_APPLICATION_ID>"
  }
  ```

  You can find these credentials in Datadog.

- `config/hosts.json` containing

  ```json
  {
    "shopistApiHost": "shopist.io"
  }
  ```

## To build the app

### Locally

The React Native SDK runs separately from Expo Go, which means the project must be built using `expo-dev-client`. Build the project locally by running the following:

```sh
yarn expo run:android
```

or

```sh
yarn expo run:ios 
```

### On EAS

#### Signing the app

Learn how to sign the app in the [EAS documentation][1].

#### Releasing the build with EAS

Before building your application, you need to upload the gitignored files as secrets. To encrypt these files, run:

```bash
cat ./credentials.json | base64
cat ./config/credentials.json | base64
cat ./config/hosts.json | base64
```

Then run `eas secret:create` to create three different string secrets with the base64 representation of the files having the following names:

- `DD_CREDENTIALS` for `./config/credentials.json`
- `DD_HOST` for `./config/credentials.json`
- `DD_APP_SIGNING` for `credentials.json`

Also add a `DATADOG_API_KEY` EAS secret containing your Datadog API key to upload sourcemaps on build.

[1]: https://docs.expo.dev/app-signing/app-credentials
