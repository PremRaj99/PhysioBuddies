import dotenv from "dotenv";
import connectToDb from "./config/connectToDb.js";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 5000;

await connectToDb();
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});


