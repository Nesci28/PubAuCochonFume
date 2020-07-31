require("dotenv").config();

const configs = {
  CORS_URL:
    process.env.NODE_ENV === "prod"
      ? "https://pubaucochonfume.vercel.app"
      : "http://localhost:4200",
  PUB_DB: process.env.NODE_ENV === "prod" ? "Pub" : "Pub_dev",
};

export default configs;
