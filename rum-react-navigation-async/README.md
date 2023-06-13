# Rum react navigation - Async Initialization

This project initializes the Datadog SDK asynchronously.
See `App.tsx` for the asynchronous initialization implementation.

## Usage

In this directory, install all dependencies:

```shell
yarn install
(cd ios && pod install)
```

To try this project you need to create a folder called `config` in the project root containing 2 files:

- `config/credentials.json` file containting

    ```json
    {
        "clientToken": "<CLIENT_TOKEN>",
        "environment": "<ENVIRONMENT_NAME>",
        "applicationId": "<RUM_APPLICATION_ID>",
        "apiCall": "<ApiLink>"
    }
    ```

    `<ApiLink>` is a hyperlink to a gist file you have created to store the Datadog initialization informations
    For example:

    ```json
    {
        "sessionSamplingRate": 60,
        "nativeCrashReportEnabled": true
    }
    ```

- `config/hosts.json` file containing

    ```json
    {
        "shopistApiHost": "shopist.io"
    }
    ```

Moreover, since we have added the [`datadog-react-native-wizard`][1] you need to add the datadog-ci.json file in the project root containing:

```json
{
  "apiKey":"<YOUR_DATADOG_API_KEY>"
}
```

Note that the [Datadog API KEY][2] should be a valid one

[1]: https://docs.datadoghq.com/real_user_monitoring/error_tracking/reactnative/#alternatives-to-datadog-react-native-wizard
[2]: https://docs.datadoghq.com/account_management/api-app-keys/#application-keys
