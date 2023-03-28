# Rum react navigation - Async Initialization

This project adds the datadog asynchronously

## Usage

To try this project for yourself you need to create a folder called config in the project root containing 2 files:

- `credentials.json` file containting

    ```json
    {
        "clientToken": "<CLIENT_TOKEN>",
        "environment": "<ENVIRONMENT_NAME>",
        "applicationId": "<RUM_APPLICATION_ID>",
        "apiCall": "<ApiLink>"
    }
    ```

    `<ApiLink>` is a hyperlink to a gist file you have created to store the Datadog initialization informations
    For example, the gist file could contain:

    ```json
    {
        "sessionSamplingRate": 60,
        "nativeCrashReportEnabled": true
    }
    ```

    For the rest you can find them in your Datadog application

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
