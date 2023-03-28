# Rum react navigation Codepush

To use codepush, we need to have our app released, that's why we'll upload it to appcenter.

## Usage

To try this project for yourself you need to create a folder called config in the project root containing 2 files:

- `credentials.json` file containting

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

    You can find these credentials in your Datadog application

- `hosts.json` file containing

    ```json
    {
        "shopistApiHost": "shopist.io"
    }
    ```

Moreover since we added the datadog wizard to the app, you need to create a file called `datadog-ci.json` containing:

```json
{
    "apiKey": "<DATADOG_API_KEY>"
}
```

You can find the `<DATADOG_API_KEY>` in your datadog setting -> ACCESS -> API Keys
