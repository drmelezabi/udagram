## Udagram Infrastructure

![Architecture](Architecture Diagram.png)

### AWS

#### RDS -> Postgres

The application server uses Postgres as database on Amazon Relational Database Service (RDS) for storing and retrieving data.

Database URI: `postgres://postgres:mM12345y@udagram.c53niy3gxgja.us-east-1.rds.amazonaws.com:5432/postgres`

#### Elastic Beanstalk

The application api server is deployed on AWS Elastic Beanstalk service. The application is uploaded to and S3 bucket.

Server URL: `http://udagram-env-2.eba-ajwnc32q.us-east-1.elasticbeanstalk.com/`

#### S3 Bucket

The frontend application is deployed on AWS S3 Bucket.

Endpoint URL: `http://melezabi-udagram.s3-website-us-east-1.amazonaws.com`

users should use Endpoint url
