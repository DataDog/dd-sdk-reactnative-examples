# Rum react navigation

The sample app.

Integrates the Datadog SDK with React Navigation.

## Usage

To try this project for yourself you need to create a folder called config in the project root containing 2 files:

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

Moreover since we added the datadog wizard to the app, you need to create a file called `datadog-ci.json` containing:

```json
{
    "apiKey": "<DATADOG_API_KEY>"
}
```

You can find the `<DATADOG_API_KEY>` in your datadog setting -> ACCESS -> API Keys
