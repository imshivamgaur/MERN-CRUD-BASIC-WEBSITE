import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";

import productRoute from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());  // allows us to accept JSON data in the req.body.

app.use(cors())
app.use("/api/products", productRoute);


// console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:"+PORT);
});

