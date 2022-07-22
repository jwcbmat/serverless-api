## Production Endpoint

    https://ktf55ovved.execute-api.sa-east-1.amazonaws.com/dev/date

### Query String Parameters

  You can use queryStringParameters called nextDate, it's not required and you must use in this format.
    `http://localhost:3000/dev/data?nextDate=DD/MM/YYYY`

## Run locally

First, run the development server:

```bash
npm run local
```

Open [http://localhost:3000/dev/data](http://localhost:3000) with your browser to see the result.

## Run tests

```bash
npm run test
  #or
npm run test:watch
```

## Deploy on AWS

```bash
npm run deploy
```