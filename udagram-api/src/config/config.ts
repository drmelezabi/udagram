/* eslint-disable @typescript-eslint/camelcase */
import * as dotenv from "dotenv";
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dbPort: parseInt(process.env.DB_PORT as string),
  dialect: `${process.env.RDS_DIALECT}`,
  port: process.env.PORT,
  aws_region: process.env.AWS_DEFAULT_REGION,
  aws_media_bucket: process.env.AWS_BUCKET,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
