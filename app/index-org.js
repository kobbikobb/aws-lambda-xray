const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));

const s3 = AWS.S3();

exports.handler = async function(event) {
    console.log('Lambda being called with: ', event);
    return s3.listBuckets().promise();
};
