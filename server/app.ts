import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as mongoose from "mongoose";
import * as morgan from "morgan";

import configs from "./configs/configs";
import authController from "./controllers/auth.controller";
import templatesController from "./controllers/templates.controller";
import { handleError } from "./middlewares/errorHandler.middleware";
import { handleResponse } from "./middlewares/responseHandler.middleware";

// Configs
// ENV
require("dotenv").config();
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = process.env.DB_URL;

// Middlewares
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("tiny"));

// CORS
app.use(
  cors({
    origin: configs.CORS_URL,
    credentials: configs.CREDENTIALS,
  })
);

// DB
mongoose.set("useFindAndModify", false);
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}`,
  options
);

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});
mongoose.connection.on("error", (err) => {
  console.log("Failed to connect to DB", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from DB");
});

// Routes
// Routes
app.use("/auth", authController);
app.use("/templates", templatesController);

// Error handling
app.use((data: any, _: unknown, res: express.Response, __: unknown) => {
  if (data.statusCode === 200 || data.statusCode === 202) {
    handleResponse(data, res);
  } else {
    console.log("err :>> ", data);
    handleError(data, res);
  }
});

// Starting the App
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// DB Close
const gracefulExit = () => {
  mongoose.connection.close(() => {
    console.log("Closing DB Connection");
    process.exit(0);
  });
};
process.on("SIGINT", gracefulExit).on("SIGTERM", gracefulExit);
