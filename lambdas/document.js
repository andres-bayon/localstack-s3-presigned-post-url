import AWS from 'aws-sdk';

if (process.env.STAGE === 'dev') {
  AWS.config = {
    endpoint: new AWS.Endpoint('http://localhost:4566'),
    accessKeyId: 'test',
    secretAccessKey: 'test',
    region: 'eu-west-1',
    logger: console,
  };
}

const postFileURL = () => {
  const s3 = new AWS.S3({ s3ForcePathStyle: true });
  return (new Promise((resolve) => {
    s3.createPresignedPost({
      Bucket: 'example-bucket',
      Fields: {
        Key: 'example',
      },
    }, (error, data) => {
      if (error) throw error;
      resolve(data);
    });
  }));
};

export const post = async () => {
  let body;
  let statusCode = 200;
  try {
    const data = await postFileURL();
    body = JSON.stringify({ data });
  } catch (error) {
    console.log(error);
  }
  return {
    statusCode,
    body,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };
};
