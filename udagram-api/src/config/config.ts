/* eslint-disable @typescript-eslint/camelcase */
import * as dotenv from "dotenv";
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

// export const config = {
//   username: `${process.env.POSTGRES_USERNAME}`,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   host: process.env.POSTGRES_HOST,
//   aws_region: process.env.AWS_REGION,
//   aws_profile: process.env.AWS_PROFILE,
//   aws_media_bucket: process.env.AWS_BUCKET,
//   accessKeyId: process.env.AWS_ACCESs_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   url: process.env.URL,
//   postgresDb: process.env.POSTGRES_URL,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
// };

export const config = {
  dbPort: Number(process.env.POSTGRES_PORT),
  dialect: "postgres",
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  aws_region: process.env.AWS_DEFAULT_REGION,
  aws_media_bucket: process.env.AWS_MEDIA_BUCKET,
  accessKeyId: process.env.AWS_ACCESs_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  postgresDb: process.env.POSTGRES_URL,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
