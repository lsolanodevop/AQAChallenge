import dotenv from "dotenv";
import { app } from "./app";
import { connectDB } from "./db";

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

let server = app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
  }).on("error", (error) => {
    throw new Error(error.message);
  });




export { server };