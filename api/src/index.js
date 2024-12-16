import dotenv from "dotenv";
import connectToDb from "./config/connectToDb.js";
import app from "./app.js";
// import path from "path";

dotenv.config();

// const __dirname = path.resolve();
const port = process.env.PORT || 5000;

await connectToDb();
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});

// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });
