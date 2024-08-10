# Creating the Lambda and deploying the code

## 0. Make sure the correct AWS profile is selected
export AWS_Profile=yourprofile

## 1. Create a S3 bucket

aws cloudformation create-stack --stack-name s3-xray --template-body file://stack-s3.yaml --region us-east-1

## 2. Zip the App
./zipit.sh

## 3. Upload the Zip file
./upload2s3.zip

## 4. Create the Lambda

aws cloudformation create-stack --stack-name lambda-xray --template-body file://stack-lambda.yaml --region us-east-1 --capabilities CAPABILITY_NAMED_IAM

# Other useful commands 
aws configure list-profiles

aws cloudformation delete-stack --stack-name s3-xray --region us-east-1
aws cloudformation delete-stack --stack-name lambda-xray --region us-east-1

aws cloudformation update-stack --stack-name s3-xray --template-body file://stack.yaml --region us-east-1 --capabilities CAPABILITY_NAMED_IAM

aws cloudformation update-stack --stack-name lambda-xray --template-body file://stack.yaml --region us-east-1 --capabilities CAPABILITY_NAMED_IAM
