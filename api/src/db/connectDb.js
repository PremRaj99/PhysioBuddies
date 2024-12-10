import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export default async function connectDb() {
  try {
    const uri = process.env.MONGO
      await mongoose
      .connect(`${uri}/${DB_NAME}`)
      .then(console.log("MONGO is connected!"))
      .catch((err) => {
        console.log("MONGO connection failed " + err);
        process.exit(0);
      });
  } catch (error) {
    console.log("MONGO connection failed " + err);
    process.exit(0);
  }
}
