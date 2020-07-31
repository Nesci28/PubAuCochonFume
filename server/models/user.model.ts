import * as mongoose from "mongoose";
import configs from "../configs/configs";

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const myDB = mongoose.connection.useDb(configs.PUB_DB);

export default myDB.model("Users", schema);
