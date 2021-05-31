# LocalStack S3 presigned POST error

Steps to reproduce

```bash
npm install
npm start
```

Call to following:

```bash
> curl --location --request POST 'http://localhost:3000/dev/document'
{"data":{"url":"http://localhost:4566/example-bucket","fields":{"Key":"example","bucket":"example-bucket","X-Amz-Algorithm":"AWS4-HMAC-SHA256","X-Amz-Credential":"test/20210531/eu-west-1/s3/aws4_request","X-Amz-Date":"20210531T064950Z","Policy":"eyJleHBpcmF0aW9uIjoiMjAyMS0wNS0zMVQwNzo0OTo1MFoiLCJjb25kaXRpb25zIjpbeyJLZXkiOiJleGFtcGxlIn0seyJidWNrZXQiOiJleGFtcGxlLWJ1Y2tldCJ9LHsiWC1BbXotQWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsiWC1BbXotQ3JlZGVudGlhbCI6InRlc3QvMjAyMTA1MzEvZXUtd2VzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsiWC1BbXotRGF0ZSI6IjIwMjEwNTMxVDA2NDk1MFoifV19","X-Amz-Signature":"f067eea94d5d0d5b75092d79f76393d1a8652b555e21bee494239ad5661a255e"}}}
> curl --location --request POST 'http://localhost:4566/example-bucket' \
--form 'Key="example"' \
--form 'bucket="example-bucket"' \
--form 'X-Amz-Algorithm="AWS4-HMAC-SHA256"' \
--form 'X-Amz-Credential="test/20210531/eu-west-1/s3/aws4_request"' \
--form 'X-Amz-Date="20210531T064833Z"' \
--form 'Policy="eyJleHBpcmF0aW9uIjoiMjAyMS0wNS0zMVQwNzo0ODozM1oiLCJjb25kaXRpb25zIjpbeyJLZXkiOiJleGFtcGxlIn0seyJidWNrZXQiOiJleGFtcGxlLWJ1Y2tldCJ9LHsiWC1BbXotQWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsiWC1BbXotQ3JlZGVudGlhbCI6InRlc3QvMjAyMTA1MzEvZXUtd2VzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsiWC1BbXotRGF0ZSI6IjIwMjEwNTMxVDA2NDgzM1oifV19"' \
--form 'X-Amz-Signature="ba93ec05f855d5b8b44176b8cda879af0455d46d8e75b9be5cbb1d5908cfc76f"'
{"status": "running"}
```

Localstack log

```
2021-05-31T06:50:47:INFO:localstack.services.edge: Unable to find forwarding rule for host "localhost:4566", path "POST /example-bucket", target header "", auth header "", data "b'--------------------------ab452a5414e2d83e\r\nContent-Disposition: form-data; name="Key"\r\n\r\nex..."
```