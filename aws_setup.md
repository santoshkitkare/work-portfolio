### ☁️ `aws_setup.md`
**Steps:**
1. Create S3 bucket (for frontend hosting): `aws s3 mb s3://YOUR_BUCKET_NAME`
2. Enable static hosting in S3 console.
3. Create AWS Lambda using SAM template above.
4. Add API Gateway trigger for `/api/contact`.
5. Update frontend `fetch('/api/contact')` to use API Gateway endpoint.
6. Connect CloudFront to your S3 bucket for HTTPS + caching.
7. Set up Route53 for your custom domain (optional).