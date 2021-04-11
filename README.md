# cross-stack-api-execution

## Setup

First, run `sls deploy` on sls-test - this will deploy the first function and output it's execution role in stack outputs

Then, run `sls deploy` on sls-test-2 - this will deploy the second function and import the first's execution role into the API Gateway resource policy

The first (sls-test) app has a handler that calls the second (sls-test-2) using `axios` and `aws4-axios` - the URL of sls-test-2 is hardcoded; you'll need to change it after the deployments are complete.

One way to test the cross stack HTTP call is to manually run the Lambda function for sls-test in the AWS console. It will output information about the response from sls-test-2. Currently, it's failing with a `403 - User is not autherised to perform this action` error
