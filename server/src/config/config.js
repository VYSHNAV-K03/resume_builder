// config.js
import env from "dotenv";
env.config();
export const config = {
  PORT: 5000,
  DB_URL:
    "mongodb+srv://vyshnavchikku891:HaqCuQ9EaglTmgHQ@cluster0.vdstpwr.mongodb.net/?retryWrites=true&w=majority",
  JWT_SECRET: "hello123",
  CLIENT_URL: process.env.CLIENT_URL,
  MAIL_USER: process.env.MAIL_USERNAME,
  OAUTH_CLIENTID: process.env.OAUTH_CLIENTID,
  OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN: process.env.OAUTH_REFRESH_TOKEN,
};
