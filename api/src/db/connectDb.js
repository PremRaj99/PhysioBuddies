import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export default async function connectToDb() {
  mongoose
    .connect(
      `${process.env.MONGO}/${DB_NAME}?retryWrites=true&w=majority`
    )
    .then(console.log("MongoDb is Connected"))
    .catch((err) => console.log(err));
}
