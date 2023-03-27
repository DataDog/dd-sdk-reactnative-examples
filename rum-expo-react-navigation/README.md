# Expo App

This app demoes how to an EXPO app using the datadog SDK

## Usage

To try this project for yourself you need to create the following:

- `credentials.json` file containting

    ```json
    {
        "clientToken": "<CLIENT_TOKEN>",
        "environment": "<ENVIRONMENT_NAME>",
        "applicationId": "<RUM_APPLICATION_ID>"
    }
    ```

    You can find these credentials in your Datadog application

- `hosts.json` file containing

    ```json
    {
        "shopistApiHost": "shopist.io"
    }
    ```

## To build the app

### Prebuild

You need to create the `credentials.json` file and the `iosCerts` folder in the root

- The `credentials.json` contains

    ```json
    {
    "ios": {
        "distributionCertificate": {
            "path": "iosCerts/dist.p12",
            "password": "<your-password>"
            },
        "provisioningProfilePath": "iosCerts/AdHoc_Expo.mobileprovision"
        }
    }
    ```

- The `iosCerts` file contains the development certificate `dist.p12` and the mobile provioning profile if you're running the app AdHoc `AdHoc_Expo.mobileprovision`

### To release the build

First download the eas cli on the Expo documentation

Before building your application, you should also upload the credentials.json in the root, and the files inside config/ as secrets. For that encrypt those files and upload them as eas secrets:

```bash
cat ./credentials.json | base64
cat ./config/credentials.json | base64
cat ./config/hosts.json | base64
```

And then run `eas secret:create` to create three different string secrets with the base64 representation of the files having the following names:

- `DD_CREDENTIALS` for `./config/credentials.json`
- `DD_HOST` for `./config/credentials.json`
- `DD_APP_SIGNING` for `credentials.json`

Moreover, you should create another secret called `DATADOG_API_KEY` containing your app API key.
