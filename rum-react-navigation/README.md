# Rum react navigation

Integrates the Datadog SDK with React Navigation.

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
    "applicationId": "<RUM_APPLICATION_ID>"
  }
  ```

  You can find these credentials in your Datadog application

- `config/hosts.json` file containing

  ```json
  {
    "shopistApiHost": "shopist.io"
  }
  ```
