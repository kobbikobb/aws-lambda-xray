# Sample NodeJS App hosted on AWS using X-Ray Tracing

This repository contains a sample application demonstrating how to set up AWS Lambda with AWS X-Ray tracing. The setup includes deploying the Lambda function using AWS CloudFormation.

## Prerequisites

- [AWS CLI](https://aws.amazon.com/cli/) installed and configured.
- Authenticated with an AWS account with the necessary permissions.
  - export AWS_Profile=yourprofile

## Creating the Lambda and deploying the code

### 1. Create an S3 bucket
```
aws cloudformation create-stack --stack-name s3-xray --template-body file://stack-s3.yaml --region us-east-1
```

### 2. Zip and Upload the App
```
./zipit.sh
./upload2s3.zip
```

### 3. Create the Lambda Function
```
aws cloudformation create-stack --stack-name lambda-xray --template-body file://stack-lambda.yaml --region us-east-1 --capabilities CAPABILITY_NAMED_IAM
```

### 4. Test it out
- Log in to the AWS console
- Navigate to the Lambda Function and execute it
- Navigate to XRay and observe the tracking :) 

## Useful AWS command to clean up and update 
```
aws cloudformation delete-stack --stack-name s3-xray --region us-east-1
aws cloudformation delete-stack --stack-name lambda-xray --region us-east-1

aws cloudformation update-stack --stack-name s3-xray --template-body file://stack.yaml --region us-east-1 --capabilities CAPABILITY_NAMED_IAM
aws cloudformation update-stack --stack-name lambda-xray --template-body file://stack.yaml --region us-east-1 --capabilities CAPABILITY_NAMED_IAM
```
