import * as mongoose from "mongoose";
import configs from "../configs/configs";

const schema = new mongoose.Schema(
  {
    templateId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strict: false }
);

const myDB = mongoose.connection.useDb(configs.PUB_DB);

export default myDB.model("Templates", schema);
