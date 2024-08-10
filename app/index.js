import AWSXRay from 'aws-xray-sdk';
import { S3 } from '@aws-sdk/client-s3';

const s3 = AWSXRay.captureAWSv3Client(new S3());

const handler = async (event) => {
    const buckets = await s3.listBuckets();

    console.log('Buckets', JSON.stringify(buckets));

    return buckets;
};

export {
    handler
};
