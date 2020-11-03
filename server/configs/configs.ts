require("dotenv").config();

const configs = {
  CORS_URL:
    process.env.NODE_ENV === "prod"
      ? ["https://pubaucochonfume.com", "https://pubaucochonfume.vercal.app"]
      : "http://localhost:4200",
  CREDENTIALS: process.env.NODE_ENV === "prod" ? true : false,
  PUB_DB: process.env.NODE_ENV === "prod" ? "Pub" : "Pub_dev",
};

export default configs;
