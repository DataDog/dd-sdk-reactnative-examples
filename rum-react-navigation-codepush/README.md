# Rum react navigation Codepush

## Usage

In this directory, install all dependencies:

```shell
yarn install
(cd ios && pod install)
```

To try this project for yourself you need to create a folder called `config` in the project root containing 2 files:

- `config/credentials.json` file containting

    ```json
    {
        "clientToken": "<CLIENT_TOKEN>",
        "environment": "<ENVIRONMENT_NAME>",
        "applicationId": "<RUM_APPLICATION_ID>",
        "CodePushDeploymentKeyAndroid": "<CodePushDeploymentKeyAndroid>",
        "CodePushDeploymentKeyIOS": "<CodePushDeploymentKeyIOS>"

    }
    ```

    Follow the [following documentation](https://learn.microsoft.com/en-us/appcenter/distribution/uploading) to learn more on appcenter and how to get the codepush keys.

- `config/hosts.json` file containing

    ```json
    {
        "shopistApiHost": "shopist.io"
    }
    ```

Since we have added the [`datadog-react-native-wizard`][1], you need to add the `datadog-ci.json` file in the project root that includes the following:

```json
{
  "apiKey":"<YOUR_DATADOG_API_KEY>"
}
```

**Note**: The [Datadog API KEY][2] must be valid.

[1]: https://docs.datadoghq.com/real_user_monitoring/error_tracking/reactnative/#alternatives-to-datadog-react-native-wizard
[2]: https://docs.datadoghq.com/account_management/api-app-keys/#application-keys
