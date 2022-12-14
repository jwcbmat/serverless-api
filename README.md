## Production Endpoint

The production endpoint for this service is:

    https://8bilj8iual.execute-api.sa-east-1.amazonaws.com/dev/date/
    
### Query String Parameters

You can use the query string parameter `nextDate` to specify the date you want to get the next date for. The date must be in the format `MM/DD/YYYY`.

For example, to get the next date for January 1, 2022, you would use the following URL:

    https://8bilj8iual.execute-api.sa-east-1.amazonaws.com/dev/date?nextDate=01/01/2022

## Running Locally

To run this service locally, first start the development server by running the following command:

```bash
npm run local
```

Once the server is running, you can access it at 
    
    http://localhost:3000/dev/data.

## Running Tests
To run the test suite for this service, use the following command:

```bash
npm run test
```

To run the tests in watch mode, use the following command instead:

```bash
npm run test:watch
```

## Deploying to AWS
To deploy this service to AWS, use the following command:

```bash
npm run deploy
```

This will build and deploy the service to AWS.
