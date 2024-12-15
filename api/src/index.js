import dotenv from "dotenv";
dotenv.config();

import connectDb from "./db/connectDb.js";
import app from "./app.js";

const port = process.env.PORT || 3000;

await connectDb();
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
